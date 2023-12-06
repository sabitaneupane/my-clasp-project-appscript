SCRIPT_ID?=
PROJECT_NAME?=

login:
	clasp login

create:
	clasp create --type sheets --title $(PROJECT_NAME)

clone:
	clasp clone $(SCRIPT_ID)

pull:
	clasp pull

push:
	clasp push
