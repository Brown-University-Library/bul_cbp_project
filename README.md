[![BUL Best Practices](https://library.brown.edu/bul_cbp/demo_image/)](https://library.brown.edu/bul_cbp/demo_info/)

##### overview

Template [runserver](https://docs.djangoproject.com/en/1.11/ref/django-admin/#runserver) and [passenger](https://www.phusionpassenger.com)-compatible [django](https://www.djangoproject.com) project.

---


##### todo checklist

(eventually pieces of this could be scripted)

- assumes python 3.6.x

- main
    - make 'stuff' dir
    - make env

            /path/to/python3 -m venv /path/to/project_x_stuff/env_x

        - source new env, and run: `pip install --upgrade pip`
    - git clone existing app, or...
        - `git clone https://github.com/birkin/bul_cbp_project.git ./project_x`
            - remove the .git/ dir
        - set up in SourceTree (git init)
        - push to GitHub
    - make sublime project
    - update names
        - change all `bul_cbp_project` references to name of project
        - change all `bul_cbp_app` references to actual name of app
        - include in above bul_cbp_app and bul_cbp_app_templates directories
        - change all `BUL_CBP__` settings references to name of project-settings prefix
    - with new env activated, pip update it from requirements.txt
        - update requirements.txt with versions
        - suggested: `pip install ipython` -- it'll make experimentation lots easier

- log
    - make log dir, ensuring permissions are correct
    - touch a project_x.log file, and update 'owner/group', and update group-permissions
        - note, if setting up on a production-server, make the owner the apache user, and the group the shared-group
    - add log to system's logrotate
    - add dir to sublime project
    - Note: initial run may create an empty logfile with an incorrect owner, causing an error. If this happens, simply update the owner -- the subsequent system's logrotate will ensure the log-file's permissions remain correct.

- settings
    - make settings dir and .sh file
    - update env/bin/activate.py like this:

            export PREFIX__SETTINGS_PATH="/path/to/project_env_settings.sh"
            source $PREFIX__SETTINGS_PATH

        - be sure the exported-path-var matches the environmental-variable accessed by the `ENV_SETTINGS_FILE` entry in `config/passenger_wsgi.py`

    - add needed items along the way; eg, in django:
        - one way to see what needs set: source the environment and run `python ./manage.py check`
        - new secret-key ([helpful code](https://gist.github.com/birkin/0f6245dd7eeb24c0f5ad))
        - db if needed
        - project's django_media directory
    - add dir to sublime project

- update
    - add git-pull script (w/set-permissions) & run it
    - once this works, source the env and try a `python ./manage.py check`

- other
    - webapp
        - create db if necessary
            - django:
                - run `python ./manage.py makemigrations --empty name_of_app` to initialize stuff
                - run `python ./manage.py makemigrations --dry-run` to see what will be done with the real command
                - run `python ./manage.py makemigrations`
                - run `python ./manage.py migrate` to actually create tables
                    - if expected tables aren't created, may need to run `python ./manage.py migrate --run-syncdb`
                - run `python ./manage.py createsuperuser` for the admin user prompt
        - django:
            - test with `python ./manage.py check` and then...
            - `python ./manage.py runserver host:port`, and hit host/port with browser or `curl`
            - add session-clearance crontab entry in format:

                    random_minute 01 * * * cd /path/to/project_stuff/project/; source ../env_prj/bin/activate > /dev/null; ../env_prj/bin/python ./manage.py clearsessions

        - https-ify project & shib-ify admin & login urls
        - setup apache handoff to python
        - restart apache if web-app
    - [site-checker](http://library.brown.edu/services/site_checker/status/) entry
    - [software-tracker entry](https://library.brown.edu/projects/software/apps/)
    - cron work if necessary (besides possible django session work listed above)
        - update crontab via (one-line):

                cd /to/main/dir; source ../env/bin/activate; ../env/bin/python ./the_script.py

---


##### other

- last [python 2.7.x version of the todo checklist](https://gist.github.com/birkin/04a0a124d49be02e3d58/0fa4732b15cb524aec00f20fb08a5c4c9f0e0742)

---

---
