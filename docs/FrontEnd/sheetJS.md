---
title: sheetJS 转换excel日期格式的问题
---  
# sheetJS 转换excel日期格式的问题

在项目中，接触到前端要求预览excel表数据，我从github上找到了`sheetJS`的`js-xlsx`这个库。  

JS主代码：
```js
    onImportExcel = file => {
        const { files } = file.target;
        let fileSize = files[0] && (files[0].size / 1024).toFixed(2) + 'KB';
        this.setState({
            excelName: files[0].name,
            excelSize: fileSize
        });
        const fileReader = new FileReader();
        fileReader.onload = event => {
            try {
                const { result } = event.target;
                const workbook = XLSX.read(result, { type: 'binary' });
                let data = [];
                for (const sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        data = data.concat(
                             XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
                        );
                    }
                }
                data.shift();
                this.handelExcelData(data);
            } catch (e) { }
        };
        // 以二进制方式打开文件
        fileReader.readAsBinaryString(files[0]);
    };
```  
其中遇到了一个问题，在excel中日期那一栏，如果设置格式为日期格式的话，它会先转成44433.989764454665...类似的格式，后期我们用JS转日期格式时，会发现部分在date日期这一项会有一天的误差。这个问题在github issue中看到有不少人提出了这个问题。但是最后我也没有通过代码来解决这个问题，也尝试了用moment来处理时间差，但是这个时间差我并没有看到精确的差值。  
所以我用了一个取巧的方法，就是*直接更改excel日期格式为文本*，这一做法让我的脑细胞突然暴增，头发也变多了。  
当然这个问题，希望XLSX也能进行修复。