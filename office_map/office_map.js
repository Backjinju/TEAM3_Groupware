const dropdown = document.querySelector('.office_map_group');
const dropdownMenu = document.querySelector('.office_map_group_employee');
const dropdownMenu1 = document.querySelector('.office_map_strategic_planning_team');
const dropdownMenu2 = document.querySelector('.office_map_management_support_team');
const dropdownMenu3 = document.querySelector('.office_map_hr_team');
const dropdownMenu4 = document.querySelector('.office_map_sales_team');
const dropdownMenu5 = document.querySelector('.office_map_marketing_team');
const dropdownMenu6 = document.querySelector('.office_map_it_team');

dropdown.addEventListener('click',function(){
    dropdownMenu.classList.toggle('active');
    dropdownMenu1.style.display ='none';
    dropdownMenu2.style.display ='none';
    dropdownMenu3.style.display ='none';
    dropdownMenu4.style.display ='none';
    dropdownMenu5.style.display ='none';
    dropdownMenu6.style.display ='none';
})

dropdownMenu1.addEventListener('click',function(){
    dropdownMenu1.classList.toggle('active');

})