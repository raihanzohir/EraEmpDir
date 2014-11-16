define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        employees = [
            { "id": 1, 
              "firstName": "Md.", 
              "middleName": "Serajul", 
              "lastName": "Islam", 
              "managerId": 0, 
              "managerName": "", 
              "reports": 16, 
              "title": "CEO & Managing Director", 
              "department": "Corporate", 
              "cellPhone": "04470025222", 
              "officePhone": "027118006", 
              "email": "serajul@era.com.bd", 
              "city": "Dhaka", 
              "pic": "serajul_islam.jpg", 
              "twitterId": "", 
              "blog": "http://www.erainfotechbd.com"
            },
            {"id": 2, "firstName": "Md.", "middleName": "Anwar", "lastName": "Hossain", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 7, "title": "Project Manager", "department": "All", "cellPhone": "04470025001", "officePhone": "027118006", "email": "anwar@era.com.bd"},
            {"id": 3, "firstName": "Md.", "middleName": "Mohsin", "lastName": "Kobir", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 11, "title": "Sr. System analyst", "department": "$telar", "cellPhone": "04470025000", "officePhone": "027118006", "email": "mohsin@era.com.bd"},
            {"id": 4, "firstName": "Mrs.", "middleName": "Dil", "lastName": "Afroz", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 3, "title": "System analyst", "department": "Foreign Trade", "cellPhone": "04470025002", "officePhone": "027118006", "email": "afroz@era.com.bd"},
            {"id": 5, "firstName": "Mohammad", "middleName": "Al", "lastName": "Mamun", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 1, "title": "System Analyst", "department": "DBA", "cellPhone": "04470025003", "officePhone": "027118006", "email": "almamun@era.com.bd"},
            {"id": 6, "firstName": "Md.", "middleName": "Arifur", "lastName": "Rahman", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 2, "title": "System Analyst", "department": "$telar", "cellPhone": "04470025004", "officePhone": "027118006", "email": "arifur@era.com.bd"},            
            {"id": 7, "firstName": "Md.", "middleName": "Tanver", "lastName": "Chowdhury", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 6, "title": "Analyst Programmer", "department": "Orbits-HRPR", "cellPhone": "04470025006", "officePhone": "027118006", "email": "tanver@era.com.bd"},
            {"id": 8, "firstName": "Mrs.", "middleName": "Fahmida", "lastName": "Perven", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 4, "title": "Analyst Programmer", "department": "Hikmah", "cellPhone": "04470025062", "officePhone": "027118006", "email": "fahmida@era.com.bd"},
            {"id": 9, "firstName": "Mohammad", "middleName": "Nazim", "lastName": "Ullah", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 12, "title": "Analyst Programmer", "department": "MyBank", "cellPhone": "04470025009", "officePhone": "027118006", "email": "nazim@era.com.bd"},
            {"id": 10, "firstName": "Md.", "middleName": "Maruf", "lastName": "Pervaz Khan", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 6, "title": "Analyst Programmer", "department": "Agent Banking", "cellPhone": "04470025010", "officePhone": "027118006", "email": "maruf@era.com.bd"},
            {"id": 11, "firstName": "Md.", "middleName": "Reajul", "lastName": "Islam", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 4, "title": "Analyst Programmer", "department": "Orbits-ERP", "cellPhone": "04470025017", "officePhone": "027118006", "email": "reajul@era.com.bd"},
            {"id": 12, "firstName": "", "middleName": "Chandan", "lastName": "Borua", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 0, "title": "Diputy. Manager", "department": "Marketing", "cellPhone": "04470025013", "officePhone": "027118006", "email": "chandan@era.com.bd"},            
            {"id": 13, "firstName": "Md.", "middleName": "Mizanur", "lastName": "Rahman", "managerId": 9, "managerName": "Mohammad Nazim Ullah", "reports": 0, "title": "Sr. Programmer", "department": "ATM", "cellPhone": "04470025015", "officePhone": "027118006", "email": "mizanur@era.com.bd"},            
            {"id": 14, "firstName": "Md.", "middleName": "Solaiman", "lastName": "Hossain", "managerId": 9, "managerName": "Mohammad Nazim Ullah", "reports": 0, "title": "Sr Programmer", "department": "MyBank", "cellPhone": "04470025016", "officePhone": "027118006", "email": "solaiman@era.com.bd"},
            {"id": 15, "firstName": "Md.", "middleName": "Kamrul", "lastName": "Hasan Jahirul", "managerId": 3, "managerName": "Md. Mohsin Kobir", "reports": 0, "title": "Sr. Programmer", "department": "$telar", "cellPhone": "04470025019", "officePhone": "027118006", "email": "jahirul@era.com.bd"},
            {"id": 16, "firstName": "AHM", "middleName": "Pervaz", "lastName": "Kobir", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 0, "title": "Sr. Programmer", "department": "e-Banking", "cellPhone": "04470025011", "officePhone": "027118006", "email": "pervaz@era.com.bd"},
            {"id": 17, "firstName": "Md.", "middleName": "Iqbal", "lastName": "Hossain", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 3, "title": "Asistant Manager", "department": "HR & Admin", "cellPhone": "04470025012", "officePhone": "027118006", "email": "iqbal@era.com.bd"},
            {"id": 18, "firstName": "Mohammad", "middleName": "Siddikur", "lastName": "Rahman Khan", "managerId": 2, "managerName": "Md. Anwar Hossain", "reports": 0, "title": "Programmer", "department": "OCAS", "cellPhone": "04470025024", "officePhone": "027118006", "email": "siddiqur@era.com.bd"},
            {"id": 19, "firstName": "Mrs.", "middleName": "Hasina", "lastName": "Akhter", "managerId": 3, "managerName": "Md. Mohsin Kobir", "reports": 0, "title": "Programmer", "department": "$telar", "cellPhone": "04470025025", "officePhone": "027118006", "email": "hasina@era.com.bd"},
            {"id": 20, "firstName": "Md.", "middleName": "Mosarraf", "lastName": "Hossain", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 0, "title": "Asst. Manager", "department": "Marketing", "cellPhone": "04470025027", "officePhone": "027118006", "email": "mosarraf@era.com.bd"},            
            {"id": 21, "firstName": "Md.", "middleName": "Zohir", "lastName": "Raihan", "managerId": 2, "managerName": "Md. Anwar Hossain", "reports": 0, "title": "Programmer", "department": "OCAS", "cellPhone": "04470025028", "officePhone": "027118006", "email": "zohir@era.com.bd"},            
            {"id": 22, "firstName": "Md.", "middleName": "Zahidul", "lastName": "Islam", "managerId": 2, "managerName": "Md. Anwar Hossain", "reports": 1, "title": "Programmer", "department": "Power Bits", "cellPhone": "04470025031", "officePhone": "027118006", "email": "zahidul@era.com.bd"},                              
            {"id": 23, "firstName": "S.M.A", "middleName": "Raof", "lastName": "", "managerId": 7, "managerName": "Md. Tanver Chowdhury", "reports": 0, "title": "Programmer", "department": "Orbits-HRPR", "cellPhone": "", "officePhone": "027118006", "email": "rouf@era.com.bd"},
            {"id": 24, "firstName": "", "middleName": "Parul", "lastName": "Akhter", "managerId": 10, "managerName": "Md. Maruf Pervaz Khan", "reports": 0, "title": "Programmer", "department": "Agent Banking", "cellPhone": "", "officePhone": "027118006", "email": "parul@era.com.bd"},
            {"id": 25, "firstName": "Md.", "middleName": "Ruman", "lastName": "Hossain Bhuya", "managerId": 7, "managerName": "Md. Tanver Chowdhury", "reports": 0, "title": "Jr. Programmer", "department": "Orbits-HRPR", "cellPhone": "", "officePhone": "027118006", "email": "ruman@era.com.bd"},
            {"id": 26, "firstName": "Mrs.", "middleName": "Jahanara", "lastName": "Begum", "managerId": 8, "managerName": "Mrs. Fahmida Pervin", "reports": 0, "title": "Jr. Programmer", "department": "Hikmah", "cellPhone": "", "officePhone": "027118006", "email": "jahanara@era.com.bd"},
            {"id": 27, "firstName": "Md.", "middleName": "Zafar", "lastName": "Ali", "managerId": 7, "managerName": "Md. Tanver Chowdhury", "reports": 0, "title": "Jr. Programmer", "department": "Orbits-HRPR", "cellPhone": "", "officePhone": "027118006", "email": "zafar@era.com.bd"},
            {"id": 28, "firstName": "Md.", "middleName": "Abul", "lastName": "Kalam Azad", "managerId": 11, "managerName": "Md. Reazul Islam", "reports": 0, "title": "Jr. Programmer", "department": "Orbits-ERP", "cellPhone": "", "officePhone": "027118006", "email": "azad@era.com.bd"},            
            {"id": 29, "firstName": "", "middleName": "Nurun", "lastName": "Nahar", "managerId": 9, "managerName": "Mohammad Nazim Ullah", "reports": 0, "title": "Jr. Programmer", "department": "MyBank", "cellPhone": "", "officePhone": "027118006", "email": "nahar@era.com.bd"},
            {"id": 30, "firstName": "Md.", "middleName": "Ishak", "lastName": "", "managerId": 9, "managerName": "Mohammad Nazim Ullah", "reports": 0, "title": "Jr. Programmer", "department": "MyBank", "cellPhone": "", "officePhone": "027118006", "email": "ishak@era.com.bd"},
            {"id": 31, "firstName": "", "middleName": "Tanjina", "lastName": "Jahan", "managerId": 2, "managerName": "Md. Anwar Hossain", "reports": 0, "title": "Jr. Programmer", "department": "OCAS", "cellPhone": "", "officePhone": "027118006", "email": "tanjina@era.com.bd"},
            {"id": 32, "firstName": "Md.", "middleName": "Shahiduzzaman", "lastName": "", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 3, "title": "Jr. Programmer", "department": "MICR", "cellPhone": "", "officePhone": "027118006", "email": "noman@era.com.bd"},            
            {"id": 33, "firstName": "Md.", "middleName": "Mizanur", "lastName": "Rahman", "managerId": 9, "managerName": "Mohammad Nazim Ullah", "reports": 0, "title": "Jr. Programmer", "department": "MyBank", "cellPhone": "", "officePhone": "027118006", "email": "mizanur2@era.com.bd"},
            {"id": 34, "firstName": "", "middleName": "Suraya", "lastName": "Akter", "managerId": 7, "managerName": "Md. Tanver Chowdhury", "reports": 0, "title": "Jr. Programmer", "department": "Orbits-ERP", "cellPhone": "", "officePhone": "027118006", "email": "suraya@era.com.bd"},            
            {"id": 35, "firstName": "", "middleName": "Masuma", "lastName": "Akter", "managerId": 3, "managerName": "Md. Mohsin Kobir", "reports": 0, "title": "Jr. Programmer", "department": "$telar", "cellPhone": "", "officePhone": "027118006", "email": "masuma@era.com.bd"},
            {"id": 36, "firstName": "Umme", "middleName": "Kulsum", "lastName": "Meherunnesa", "managerId": 8, "managerName": "Mrs. Fahmida Perven", "reports": 0, "title": "Asst. Programmer", "department": "Hikmah", "cellPhone": "", "officePhone": "027118006", "email": "meherunnesa@era.com.bd"},
            {"id": 37, "firstName": "Md.", "middleName": "Mokaddes", "lastName": "Hossain", "managerId": 9, "managerName": "Mohammad Nazim Ullah", "reports": 0, "title": "Asst. Programmer", "department": "MyBank", "cellPhone": "", "officePhone": "027118006", "email": "mokaddes@era.com.bd"},
            {"id": 38, "firstName": "Md.", "middleName": "Masum", "lastName": "Miah", "managerId": 11, "managerName": "Md. Reajul Islam", "reports": 0, "title": "Asst. Programmer", "department": "Orbits-ERP", "cellPhone": "", "officePhone": "027118006", "email": "masum@era.com.bd"},
            {"id": 39, "firstName": "Md.", "middleName": "Alauddin", "lastName": "", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 0, "title": "EO", "department": "Accounts", "cellPhone": "", "officePhone": "027118006", "email": "alauddin@era.com.bd"},
            {"id": 40, "firstName": "Md.", "middleName": "Nur", "lastName": "Alam", "managerId": 10, "managerName": "Md. Maruf Pervaz Khan", "reports": 0, "title": "Asst. Programmer", "department": "Agent Banking", "cellPhone": "", "officePhone": "027118006", "email": "nuralam@era.com.bd"},
            {"id": 41, "firstName": "", "middleName": "Sania", "lastName": "Rahman", "managerId": 9, "managerName": "Mohammad Nazim Ullah", "reports": 0, "title": "Asst. Programmer", "department": "MyBank", "cellPhone": "", "officePhone": "027118006", "email": "sanya@era.com.bd"},
            {"id": 42, "firstName": "Miss", "middleName": "Masuma", "lastName": "Sultana", "managerId": 9, "managerName": "Mohammad Nazim Ullah", "reports": 0, "title": "Asst. Programmer", "department": "MyBank", "cellPhone": "", "officePhone": "027118006", "email": "masumasultana@era.com.bd"},            
            {"id": 43, "firstName": "Miss", "middleName": "Ismat", "lastName": "Sultana", "managerId": 11, "managerName": "Md. Reajul Islam", "reports": 0, "title": "Asst. Programmer", "department": "Orbits-ERP", "cellPhone": "", "officePhone": "027118006", "email": "ismat@era.com.bd"},
            {"id": 44, "firstName": "Mohammad", "middleName": "Wali", "lastName": "Ullah", "managerId": 3, "managerName": "Md. Mohsin Kobir", "reports": 0, "title": "Asst. Programmer", "department": "$telar", "cellPhone": "", "officePhone": "027118006", "email": "wali@era.com.bd"},
            {"id": 45, "firstName": "Md.", "middleName": "Shafiqul", "lastName": "Islam", "managerId": 32, "managerName": "Md. Shahiduzzaman", "reports": 0, "title": "Asst. Programmer", "department": "MICR", "cellPhone": "", "officePhone": "027118006", "email": "sofiqul@era.com.bd"},
            {"id": 46, "firstName": "Md.", "middleName": "Farid", "lastName": "Ahmed", "managerId": 4, "managerName": "Mrs. Dil Afroz", "reports": 0, "title": "Asst. Programmer", "department": "Foreign Traders", "cellPhone": "", "officePhone": "027118006", "email": "farid@era.com.bd"},
            {"id": 47, "firstName": "Md.", "middleName": "Iliachh", "lastName": "Shaikh", "managerId": 9, "managerName": "Mohammad Nazim Ullah", "reports": 0, "title": "Asst. Programmer", "department": "MyBank", "cellPhone": "", "officePhone": "027118006", "email": "iliachh@era.com.bd"},
            {"id": 48, "firstName": "Md.", "middleName": "Kaium", "lastName": "Hossain", "managerId": 10, "managerName": "Md. Maruf Pervaz Khan", "reports": 0, "title": "Asst. Programmer", "department": "EBEK", "cellPhone": "", "officePhone": "027118006", "email": "kaium@era.com.bd"},
            {"id": 49, "firstName": "Mohammad", "middleName": "Ali", "lastName": "", "managerId": 8, "managerName": "Mrs. Fahmida Perven", "reports": 0, "title": "Asst. Programmer", "department": "Hikmah", "cellPhone": "", "officePhone": "027118006", "email": "mdali@era.com.bd"},
            {"id": 50, "firstName": "M.", "middleName": "A.", "lastName": "Wahid", "managerId": 5, "managerName": "Mohammad Al Mamun", "reports": 0, "title": "Asst. Programmer", "department": "DBA", "cellPhone": "", "officePhone": "027118006", "email": "wahid@era.com.bd"},
            {"id": 51, "firstName": "", "middleName": "Shamiha", "lastName": "Khanum", "managerId": 6, "managerName": "Md. Arifur Rahman", "reports": 0, "title": "Tr. Programmer", "department": "$telar", "cellPhone": "", "officePhone": "027118006", "email": "shamiha@era.com.bd"},
            {"id": 52, "firstName": "", "middleName": "Shakila", "lastName": "Jannat", "managerId": 6, "managerName": "Md. Arifur Rahman", "reports": 0, "title": "Tr. Programmer", "department": "$telar", "cellPhone": "", "officePhone": "027118006", "email": "shakila@era.com.bd"},
            {"id": 53, "firstName": "", "middleName": "Mahmuda", "lastName": "Khatun", "managerId": 4, "managerName": "Mrs. Dil Afroz", "reports": 0, "title": "Tr. Programmer", "department": "Foreign Trade", "cellPhone": "", "officePhone": "027118006", "email": "mahmuda@era.com.bd"},
            {"id": 54, "firstName": "Md.", "middleName": "Ali", "lastName": "Imam", "managerId": 2, "managerName": "Md. Anwar Hossain", "reports": 0, "title": "Tr. Programmer", "department": "OCAS", "cellPhone": "", "officePhone": "027118006", "email": "imam@era.com.bd"},
            {"id": 55, "firstName": "", "middleName": "Nadia", "lastName": "Rashid", "managerId": 3, "managerName": "Md. Mohsin Kobir", "reports": 0, "title": "Tr. Programmer", "department": "$telar", "cellPhone": "", "officePhone": "027118006", "email": "nadia@era.com.bd"},
            {"id": 56, "firstName": "Md.", "middleName": "Saifur", "lastName": "Rahman", "managerId": 10, "managerName": "Md. Maruf Pervaz Khan", "reports": 0, "title": "Tr. Programmer", "department": "EBEK", "cellPhone": "", "officePhone": "027118006", "email": "saifur@era.com.bd"},
            {"id": 57, "firstName": "Md.", "middleName": "Fahim", "lastName": "Jamal", "managerId": 3, "managerName": "Md. Mohsin Kobir", "reports": 0, "title": "Tr. Programmer", "department": "$telar", "cellPhone": "", "officePhone": "027118006", "email": "fahim@era.com.bd"},
            {"id": 58, "firstName": "Md.", "middleName": "Monir", "lastName": "Hossain", "managerId": 9, "managerName": "Mohammad Nazim Ullah", "reports": 0, "title": "Tr. Programmer", "department": "MyBank", "cellPhone": "", "officePhone": "027118006", "email": "monir@era.com.bd"},
            {"id": 59, "firstName": "Md.", "middleName": "Asikur", "lastName": "Ul Alam", "managerId": 11, "managerName": "Md. Reajul Islam", "reports": 0, "title": "Tr. Programmer", "department": "Orbits-ERP", "cellPhone": "", "officePhone": "027118006", "email": "ashikur@era.com.bd"},
            {"id": 60, "firstName": "A.K.M", "middleName": "Hasanuzzaman", "lastName": "", "managerId": 8, "managerName": "Mrs. Fahmida Perven", "reports": 0, "title": "Tr. Programmer", "department": "Hikmah", "cellPhone": "", "officePhone": "027118006", "email": "akmhasan@era.com.bd"},
            {"id": 61, "firstName": "Md.", "middleName": "Monjur", "lastName": "Morshed", "managerId": 2, "managerName": "Md. Anwar Hossain", "reports": 0, "title": "Tr. Programmer", "department": "OCAS", "cellPhone": "", "officePhone": "027118006", "email": "monjur@era.com.bd"},
            {"id": 62, "firstName": "", "middleName": "Kaniz", "lastName": "Fatema Mukti", "managerId": 10, "managerName": "Md. Maruf Pervaz Khan", "reports": 0, "title": "Tr. Programmer", "department": "EBEK", "cellPhone": "", "officePhone": "027118006", "email": "kaniz@era.com.bd"},
            {"id": 63, "firstName": "Md.", "middleName": "Imam", "lastName": "Mahidi", "managerId": 32, "managerName": "Md. Shahiduzzaman", "reports": 0, "title": "Tr. Programmer", "department": "MICR", "cellPhone": "", "officePhone": "027118006", "email": "mahidi@era.com.bd"},
            {"id": 64, "firstName": "Md.", "middleName": "Ariful", "lastName": "Islam", "managerId": 2, "managerName": "Md. Anwar Hossain", "reports": 0, "title": "Tr. Programmer", "department": "OCAS", "cellPhone": "", "officePhone": "027118006", "email": "ariful@era.com.bd"},
            {"id": 65, "firstName": "Md.", "middleName": "Tariqul", "lastName": "Islam", "managerId": 7, "managerName": "Md. Tanver Chowdhury", "reports":0, "title": "Tr. Programmer", "department": "Orbits-HRPR", "cellPhone": "", "officePhone": "027118006", "email": "tariqul@era.com.bd"},
            {"id": 66, "firstName": "Syeda", "middleName": "Shayla", "lastName": "Rahman", "managerId": 3, "managerName": "Md. Mohsin Kobir", "reports": 0, "title": "Tr. Programmer", "department": "$telar", "cellPhone": "", "officePhone": "027118006", "email": "shayla@era.com.bd"},
            {"id": 67, "firstName": "A.K.M", "middleName": "Ashraful", "lastName": "Alam", "managerId": 9, "managerName": "Mohammad Nazim Ullah", "reports": 0, "title": "Tr. Programmer", "department": "MyBank", "cellPhone": "", "officePhone": "027118006", "email": "ashraful@era.com.bd"},
            {"id": 68, "firstName": "Md.", "middleName": "Asik", "lastName": "Hasan", "managerId": 10, "managerName": "Md. Maruf Pervaz Khan", "reports": 0, "title": "Tr. Programmer", "department": "EBEK", "cellPhone": "", "officePhone": "027118006", "email": "asik@era.com.bd"},
            {"id": 69, "firstName": "Md.", "middleName": "Enamul", "lastName": "Hauque", "managerId": 9, "managerName": "Mohammad Nazim Ullah", "reports": 0, "title": "Tr. Programmer", "department": "MyBank", "cellPhone": "", "officePhone": "027118006", "email": "enamul@era.com.bd"},
            {"id": 70, "firstName": "A.", "middleName": "Hakim", "lastName": "", "managerId": 3, "managerName": "Md. Mohsin Kobir", "reports": 0, "title": "Tr. Programmer", "department": "$telar", "cellPhone": "", "officePhone": "027118006", "email": "ahakim@era.com.bd"},
            {"id": 71, "firstName": "", "middleName": "Hejbullah", "lastName": "Afsari", "managerId": 3, "managerName": "Md. Mohsin Kobir", "reports": 0, "title": "Tr. Programmer", "department": "$telar", "cellPhone": "", "officePhone": "027118006", "email": "hejbullah@era.com.bd"},
            {"id": 72, "firstName": "Md.", "middleName": "Jakir", "lastName": "Hossain", "managerId": 7, "managerName": "Md. Tanver Chowdhury", "reports": 0, "title": "Tr. Programmer", "department": "Orbits-ERPR", "cellPhone": "", "officePhone": "027118006", "email": "jakir@era.com.bd"},
            {"id": 73, "firstName": "Md.", "middleName": "Khaledur", "lastName": "Rahman", "managerId": 32, "managerName": "Md. Shahiduzzaman", "reports": 0, "title": "Tr. Programmer", "department": "MICR", "cellPhone": "", "officePhone": "027118006", "email": "khaledur@era.com.bd"},
            {"id": 74, "firstName": "", "middleName": "Samia", "lastName": "Rashid", "managerId": 22, "managerName": "Md. Zahidul Islam", "reports": 0, "title": "Tr. Programmer", "department": "Power Bits", "cellPhone": "", "officePhone": "027118006", "email": "samia@era.com.bd"},
            {"id": 75, "firstName": "", "middleName": "Jahanara", "lastName": "Laizu", "managerId": 3, "managerName": "Md. Mohsin Kobir", "reports": 0, "title": "Tr. Programmer", "department": "$telar", "cellPhone": "", "officePhone": "027118006", "email": "laizu@era.com.bd"},
            {"id": 76, "firstName": "Md.", "middleName": "Serajul", "lastName": "Islam (Hera)", "managerId": 4, "managerName": "Mrs. Dil Afroz", "reports": 0, "title": "Tr. Programmer", "department": "Foreign Trade", "cellPhone": "", "officePhone": "027118006", "email": "serajulhera@era.com.bd"},
            {"id": 77, "firstName": "Mir", "middleName": "Mohammad", "lastName": "Hossain", "managerId": 17, "managerName": "Md. Iqbal Hossain", "reports": 0, "title": "Asst. Tech.", "department": "Hardware", "cellPhone": "", "officePhone": "027118006", "email": "mir@era.com.bd"},
            {"id": 78, "firstName": "Md.", "middleName": "Aiub", "lastName": "Ali", "managerId": 17, "managerName": "Md. Iqbal Hossain", "reports": 0, "title": "Messanger", "department": "Office", "cellPhone": "", "officePhone": "027118006", "email": ""},
            {"id": 79, "firstName": "Md.", "middleName": "Ariful", "lastName": "Islam", "managerId": 17, "managerName": "Md. Iqbal Hossain", "reports": 0, "title": "Messanger", "department": "Office", "cellPhone": "", "officePhone": "027118006", "email": ""},
            {"id": 80, "firstName": "", "middleName": "Irfan", "lastName": "Khan", "managerId": 1, "managerName": "Md. Serajul Islam", "reports": 0, "title": "Sr. Executive(Mar.)", "department": "Marketing", "cellPhone": "", "officePhone": "027118006", "email": "irfan@era.com.bd"}                
            
        ],

        findById = function (id) {
            var deferred = $.Deferred(),
                employee = null,
                l = employees.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (employees[i].id === id) {
                    employee = employees[i];
                    break;
                }
            }
            deferred.resolve(employee);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred(),
                results = employees.filter(function (element) {
                    var fullName = element.firstName + " " + element.middleName + " " + element.lastName;
                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
            deferred.resolve(results);
            return deferred.promise();
        },

        findByManager = function (managerId) {
            var deferred = $.Deferred(),
                results = employees.filter(function (element) {
                    return managerId === element.managerId;
                });
            deferred.resolve(results);
            return deferred.promise();
        },


        Employee = Backbone.Model.extend({

            initialize: function () {
                this.reports = new ReportsCollection();
                this.reports.parent = this;
            },

            sync: function (method, model, options) {
                if (method === "read") {
                    findById(parseInt(this.id)).done(function (data) {
                        options.success(data);
                    });
                }
            }

        }),

        EmployeeCollection = Backbone.Collection.extend({

            model: Employee,

            sync: function (method, model, options) {
                if (method === "read") {
                    findByName(options.data.name).done(function (data) {
                        options.success(data);
                    });
                }
            }

        }),

        ReportsCollection = Backbone.Collection.extend({

            model: Employee,

            sync: function (method, model, options) {
                if (method === "read") {
                    findByManager(this.parent.id).done(function (data) {
                        options.success(data);
                    });
                }
            }

        });

    return {
        Employee: Employee,
        EmployeeCollection: EmployeeCollection,
        ReportsCollection: ReportsCollection
    };

});
