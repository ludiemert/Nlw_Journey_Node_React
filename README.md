<h2 align="center"> 💻 FullStack project using Node.js, React.js  Plann.er NLW Journey  </h2>  <br>
<h4> This is content from the 16th edition of Next Level Week, presented between July 8 and 10, 2024 # Rocketseat
Travel management application using technologies:</h4>

<h3 align="center"><img src="/nlw-journey-banner.png" heigh="50%" width="50%"></h3>

<h4 align="center"> 🥰Organizing Travel Made Easy </h4>

<h3 align="center"> Project screens, Backend</h3>
<h4>  - Node.js with TypeScript and Prisma for the Back-End (API, functionalities and routes : focusing mainly on configuring the database and creating the first routes and creating new entities and building new HTTP endpoints). </h4>

 <h4 align="center"> Test_Route_send_email</h4>
  <div align="center">
    <img src="/backend/src/img/1_test_route_send_email.png" heigh="100%" width="100%"> </div>
    
   <h4 align="center"> Email_html </h4>
     <div align="center">
    <img src="/backend/src/img/2_email_html.png" heigh="100%" width="100%">     
     </div>
    
   <h4 align="center"> All_users_trip </h4>
     <div align="center">
    <img src="/backend/src/img/3_All_users_trip.png" heigh="100%" width="100%"> 
     </div>
      <h4 align="center"> Send_email_all_participants_use_promisse all </h4>
     <div align="center">
    <img src="/backend/src/img/4_send_email_all_participants_use_promisse all.png" heigh="100%" width="100%"> 
    </div>
       <h4 align="center"> Route_activity_POST </h4>
     <div align="center">
    <img src="/backend/src/img/5_route_activity_POST.png" heigh="100%" width="100%"> 
     </div>
      <h4 align="center"> Route_list_activity_GET </h4>
     <div align="center">
    <img src="/backend/src/img/6_route_list_activity_GET.png" heigh="100%" width="100%"> 
     </div>
      <h4 align="center"> Route_create_link_POST </h4>
     <div align="center">
    <img src="/backend/src/img/7_route_create_link_POST.png" heigh="100%" width="100%"> 
     </div>
      <h4 align="center"> Route_update_trip_PUT </h4>
     <div align="center">
    <img src="/backend/src/img/8_route_update_trip_PUT.png" heigh="100%" width="100%">
     </div>
      <h4 align="center"> Route_details_trip_GET </h4>
     <div align="center">
    <img src="/backend/src/img/9_route_details_trip_GET.png" heigh="100%" width="100%"> 
     </div>    
       <h4 align="center"> Route_list_1 _participant </h4>
     <div align="center">
    <img src="/backend/src/img/10_route_list_1 _participant.png" heigh="100%" width="100%"> 
     </div>   
       <h4 align="center"> Route_list_1 _participant </h4>
     <div align="center">
    <img src="/backend/src/img/10_route_list_1 _participant.png" heigh="100%" width="100%"> 
     </div> 
       

---

<p align="center">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
</p>


Plann.er is an API developed during the NLW Journey event, a 100% hands-on Rocketseat event in 2024.

With Plann.er, users find a practical and simple way to organize and manage their journeys, whether solo or in a group! Making travel management easy and stress-free for users.

---

### 📋 API functionalities

- Create detailed itineraries:** Organize the stages of your trip, including destinations, activities, dates and times.
- Manage important links:** Store links to reservations, flights, hotels, restaurants and other relevant information in one place.
- Share with friends and/or family:** Share your itinerary and links with other members of your trip using just their email address.
---

### 🛠️ Tecnologias Utilizadas

- Fastify  => Creating the web server. <br>
- Zod  =>  Data validation for TypeScript. <br>
- PrismaORM =>  ORM for working with databases in TypeScript environments natively.  <br>
- Nodemailer =>  Sending emails. <br>
- ESLint =>  Code formatting and standardization.  <br>
- Prettier  =>  Code beautification and standardization. <br>
- Lint-Staged  =>  Applying specific scripts to only “staged” files.  <br>
- Husky => Automating tasks and running scripts in specific situations (before a commit, for example).  <br>
- Jest & Supertest  =>  End-to-end testing.  <br>
---

### 🚀 Requirements for use

1. NodeJS installed;
2. Package manager installed (npm, yarn or pnpm);

---

### 📦 How to use

> Clone the project repository
```bash
git clone https://github.com/ludiemert/Nlw_Journey_Node_React.git
```

> Go to the project folder and install the dependencies
```bash
cd nlw-journey-node/backend
yarn install
```

> Seed the database
```bash
yarn db:seed
```

> Start the development server
```bash
yarn start:dev
```

>  Access a view of the database
```bash
yarn db:studio
```

> Create and run the project build
```bash
yarn build
yarn start
```

---


<h3 align="center"> Project screens, Frontend</h3>
<h4>- React with Vite + Typescript, focusing mainly on creating the interface using Tailwind for the Front-End (working on React functionalities: componentization and adding navigation between routes).
Finalized the project: adding API integration, HTTP calls with Axios and date management.</h4>

<h4>The project consists of registering a trip, inviting friends, then having some confirmation flows via email, then the user can register activities with schedules, links and manage the guests.</h4>

<h3 align="center"><img src="/home.PNG" heigh="50%" width="50%"></h3>

   <h4 align="center"> Front_ativicty </h4>
     <div align="center">
    <img src="/frontend/src/img/01_front_ativicty.png" heigh="100%" width="100%"> 
     </div>

  <h4 align="center"> Connection_front_back </h4>
     <div align="center">
    <img src="/frontend/src/img/02_connection_front_back.png" heigh="100%" width="100%"> 
     </div>
       <h4 align="center"> Documentation_backend </h4>
     <div align="center">
    <img src="/frontend/src/img/03_documentation_backend.png" heigh="100%" width="100%"> 
     </div>
       <h4 align="center"> Front_Back_activity </h4>
     <div align="center">
    <img src="/frontend/src/img/04_front_Back_activity.png" heigh="100%" width="100%"> 
     </div>


### 🛠️ Tecnologias Utilizadas

- Vite => A fast development server and build tool.
- React => A JavaScript library for building user interfaces.
- TypeScript => A superset of JavaScript that adds optional static typing.
- Tailwind CSS => A utility-based CSS framework.
- Sonner => A library for creating notifications in React.
- Tailwind Variants =>  A library for creating variants of utility classes with Tailwind CSS.
- React Daypicker =>  A React component for selecting dates.

- ### 📦 How to use

1. Clone the repository:

   ```
   git clone https://github.com/ludiemert/Nlw_Journey_Node_React.git
   ```

2. Install the dependencies:

   ```
   yarn install
   ```

3.  Start the development server:

   ```
   yarn dev
   ```

<h4> The app will be available in your browser at http://localhost:5173 </h4>

# 🎨 Layout
Você pode visualizar o layout do projeto através do link abaixo:
- [Layout Web](https://www.figma.com/design/WOq6HVFNeKbwDPE61t142f/NLW-Journey-%E2%80%A2-Planejador-de-viagem-(Community)?node-id=0-1&t=FaZbUdjuS0zid6pH-0) (Remember that you need to have a Figma account🥰).



### 🔗 Useful links

- **Project Repository:** [https://github.com/ludiemert/Nlw_Journey_Node_React](https://github.com/ludiemert/Nlw_Journey_Node_React)
#### ✒️ Authors

**Rocketseat**

- #### My LinkedIn - [![Linkedin Badge](https://img.shields.io/badge/-LucianaDiemert-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucianadiemert/)](https://www.linkedin.com/in/lucianadiemert/)

#### Contact

<img align="left" src="https://www.github.com/ludiemert.png?size=150">

#### [**Luciana Diemert**](https://github.com/ludiemert)

🛠 `Front-end` `Back-end`Developer Jr. <br>
📍 São Jose dos Campos – SP - Brazil

<a href="https://www.linkedin.com/in/lucianadiemert" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="25"></a>&nbsp;
<a href="mailto:lucianadiemert@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white" alt="Gmail Badge" height="25"></a>&nbsp;
<a href="#"><img src="https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white" title="LuDiem#0654" alt="Discord Badge" height="25"></a>&nbsp;
<a href="https://www.github.com/ludiemert" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white" alt="GitHub Badge" height="25"></a>&nbsp;

<br clear="left"/>

------------------
## 🎁 Acknowledgements and dedications

* Thank you #Rocketseat team

