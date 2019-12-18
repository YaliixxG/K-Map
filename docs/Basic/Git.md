---
title: Git经常忘记又会用到的操作
---  
# <font color="#FF1493">Git经常忘记又会用到的操作</font>    

#### 版本回退  

1. 先查看提交历史记录，并且找出版本号  
```docs 
    $ git log
```  
结果如下：  

```js
nongtanjiaobulan:xg-zwzygxwz-web YaliixxG$ git reset --hard d21254d1a57fc935a03ab4eab41b04f04c8edaaf
HEAD is now at d21254d docs: 切正式环境
nongtanjiaobulan:xg-zwzygxwz-web YaliixxG$ git push -f
Total 0 (delta 0), reused 0 (delta 0)
To https://gitlab10.aaaaaaaa.com/库命/项目.git
 + 3457c57...d21254d develop -> develop (forced update)  
 ```  
此为版本号：
```docs
    d21254d1a57fc935a03ab4eab41b04f04c8edaaf
``` 
2. 回退到你需要的版本  

```docs
    $ git reset --hard d21254d1a57fc935a03ab4eab41b04f04c8edaaf
```  
3. 强制远程分支回退到本地版本  

```docs 
    $ git push -f
```

