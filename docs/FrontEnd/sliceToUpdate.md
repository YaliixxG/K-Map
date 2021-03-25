---
title: 切片上传
---

# <font color="#fdd333">切片上传</font>

#### HTML
```html
<input accept="audio/mp4, video/mp4" onchange="fileOutput" type="file" />
```

### 思路
1. 校验文件大小，格式类型等等
2. 文件校验，利用 MD5 对文件进行加密
3. 文件分片，分片大小，片数，总片数
4. 上传分片，依次上传（formData 格式上传）

