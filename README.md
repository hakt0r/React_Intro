# React Lessons for FbW14d

## Creating scripts

```BashScript
sudo nano /usr/local/bin/fix-submodules
```
Inside nano write your script:

```BashScript
#!/bin/sh
git pull
git submodule init
git submodule update
```
After saving it, the script need to be made execuatble:

```BashScript
sudo chmod a+x /usr/local/bin/fix-submodules
```


## Videos

 You can watch the lesson videos [here](https://sz.hktr.de/dci/fbw14/index.html).

 Please note that you can only stream them in Chrome(ium).