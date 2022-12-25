# cypress-profile-manager
This is an Automation FW development to test the Profile Manager application that would be include API and UI test scenarios.


# Automation FW Architecture
![image](https://user-images.githubusercontent.com/64664332/209480550-d61e7a9a-7375-4aba-bfa0-897d135ca0f5.png)

-	support: Location of core and business common methods
o	core: Definition of classes to store wrapped up cy build in method which relating much more on the framework and elements handling
o	contour: Definition of classes to store common methods which describe a business flow basing on domain knowledge of a specified project
-	configuration: Store configuration for cypress and test run. We can define specPattern, timeout, environment variables, etc. in cypress.config.js file
-	fixtures: Resources location. Test Data files, JSON Schemas, upload images, downloads, etc. would be store in this folder
-	e2e: Test spec files location. The spec files are separated into api and ui folder. The TestController.js class would be used to initialize the class instances as well as storing setUp method definition
-	report: Location for the generated xml and html report


# Structure in VSCode Editor

![image](https://user-images.githubusercontent.com/64664332/209480571-1dbf0571-4324-44f0-b3f9-56fb2aa09ba6.png)

 
# Prerequisite

-	Install [NodeJS-v14.17.3](https://nodejs.org/dist/v14.17.3/)

![image](https://user-images.githubusercontent.com/64664332/209480496-3cf29551-10ed-4dcf-8b72-61e1ce373253.png)

-	 Install [allure-commandline](https://www.npmjs.com/package/allure-commandline)

![image](https://user-images.githubusercontent.com/64664332/209480517-5dfad944-f2df-48c7-b538-d731f9de8791.png)


-	Clone source code to your local

-	Start API server (via command line / terminal)

```
cd contour-api
npm i 
npm run server
```

-	Start frontend application (via command line / terminal)

```
cd contour-app 
npm i 
npm run build 
npm run start
```

-	Install dependencies for automation framework

```
cd test
npm run reinstall
```



# Test Scenario

### API
 
![image](https://user-images.githubusercontent.com/64664332/209480599-9bdfb8bd-7942-42bf-8381-8c71092aff02.png)


### UI

![image](https://user-images.githubusercontent.com/64664332/209480610-9fc9eed2-53c4-4c81-bbd6-31681a452063.png)
 

# Execute Test

### All Tests

-	To run all tests, please use following command

```npm run cy:test```

<img width="724" alt="image" src="https://user-images.githubusercontent.com/64664332/209480625-ed1384d6-cf90-46ed-8499-862fe0637993.png">

### API

-	To run api tests only, please use following command

```npm run cy:test-api```

<img width="699" alt="image" src="https://user-images.githubusercontent.com/64664332/209480638-e7dcd84b-cd4c-4456-86dc-0b65b59f8276.png">

### UI

-	To run ui tests only, please use following command

```npm run cy:test-ui```

<img width="699" alt="image" src="https://user-images.githubusercontent.com/64664332/209480659-f70fd85b-0176-46ee-a98d-2b6963bbd10a.png">


# Report

-	To generate allure report, please use following command

```npm run allure:report```

<img width="568" alt="image" src="https://user-images.githubusercontent.com/64664332/209481028-7cd85742-97e3-4843-8710-5b43ec25eedc.png">

![image](https://user-images.githubusercontent.com/64664332/209481042-318daf49-4cf0-454b-b98a-e87d584d8a83.png)


