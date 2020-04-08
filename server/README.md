# Siesta Gardens Server
## Python 3!


###### To create conda python environment
```conda create --name siestaGardens python=3```

###### To activate the environment, use#
```conda activate siestaGardens```

###### To install dependencies (once you're in an environment)
```pip install -r requirements.txt```

###### If you install new stuff via pip, run this (from server folder) to update the dependencies
```pip freeze > requirements.txt```



###### To deactivate an active environment, use
```conda deactivate```

###### to run the server (from server directory root)
```FLASK_APP=server/server.py FLASK_ENV=development flask run```


or go here if you're not able to get it to run right 
https://flask.palletsprojects.com/en/1.1.x/installation/

for conda support with Pycharm
https://www.jetbrains.com/help/pycharm/conda-support-creating-conda-virtual-environment.html

