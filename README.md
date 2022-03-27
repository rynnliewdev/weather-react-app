# Weather React App

A minimal weather web app to fetch weather data from api https://openweathermap.org/ by locations



1. ####  Features Completed

   - Detect current location and fetch weather data by current coordinates (latitude and longitude)

   - Search weather data by city and country

   - Searched weather data stored as Search Histories

   - Only unique weather location will be displayed in the search history list (the previous location will be removed to avoid location duplication)

   - Delete selected weather from the search history list

   - Search again the weather from the search history list

   - Display error message when weather not found

     

2. #### Reusabilities

   - The apis are grouped into /services folder with named functions which can be used by different components
   - Custom hooks such as useLocalStorage and useArray are used 
   - Page is broken into smaller components 



3. #### Component Library Used

   - Material UI https://mui.com/ 

   

4. #### Issues Faced

   - The OpenWeatherMap api unable to call the latest data continuously of the same location (have to wait another 5 - 15 mins)
   - The **dt** value from the api response sometimes will reduced when call again 
   - Customization in MUI component with Styled Component not working as intended

