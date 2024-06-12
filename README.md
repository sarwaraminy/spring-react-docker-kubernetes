<h1>Enterprise Application with MySQL | Java Spring Boot | React | Dockerize | Kubernetes | Minikube</h1>

Welcome to our Enterprise Application project! This project demonstrates the integration of MySQL database with Java Spring Boot for the backend and React for the frontend. We've implemented essential functionalities needed for enterprise applications, including CRUD operations, report generation in PDF and Excel formats, sorting, and search capabilities.

<h2>Features</h2>
<b>CRUD Operations:</b> Perform Create, Read, Update, and Delete operations on your enterprise data.<br />
<b>Report Generation:</b> Generate reports in both PDF and Excel formats for easy data analysis.<br />
<b>Sorting:</b> Sort data by column titles to quickly find the information you need.<br />
<b>Search Ability:</b> Search through your data efficiently with our search functionality.<br />
<b>User Authentication and Authorization:</b> Secure your application with user authentication and authorization.<br />
<b>User Registration Page:</b> Allow new users to register with your application.<br />
<b>User Role:</b> Implement user roles to manage permissions within your application.<br />
<h4>if you are not want to run you frontend and backend separtly, then follow the following steps:</h4>
<ul>
  <li>make sure you are in 'client' directory like */client><b>npm run build</b></li>
  <li>copy the build folder from 'client' folder and past under <b>*/src/main/resources/static/</b> folder</li>
</ul>
<h4>before running docker-compose build your spring backend to create *.jar file in target/ folder</h3>
<ul><li>mvn package -DskipTests=true</li></ul>
<b>Dockerization:</b> Containerize your application components for easy deployment and scalability.<br />
<ul>
  <li>docker-compose down</li>
  <li>docker-compose build</li>
  <li>docker-compose up -d</li>
  <h4>Stop all images</h4>
  <li>docker-compose stop</li>
  <h4>Docker command that is removing an image</h4>
  <li>docker rmi {image-id} --force</li>
  <h4>Docker command that is removing a container</h4>
  <li>docker rm {container-id}</li>
  <h4>To interact with docker mysql container run the following docker command</h4>
  <li>mysql -h 127.0.0.1 -P 6604 -u root -p</li>
  <h4>to see the an image information</h4>
  <li>docker inspect image id</li>
  <h4> Build and push docker hub (https://hub.docker.com/repositories/sarwaraminy) and tag you image to automaticly update the kubernetes</h4>
  <li>docker tag sarwaraminy/spring-react-docker-backend:latest sarwaraminy/spring-react-docker-backend:latest</li>
  <li>docker push sarwaraminy/spring-react-docker-backend:latest </li>
</ul>

<h2>Deploy with Kubernetes</h2>
<ul>
  <li>Install Kubernetes from https://kubernetes.io/releases/download/ </li>
  <li>Install minikube from https://minikube.sigs.k8s.io/docs/start/?arch=%2Fwindows%2Fx86-64%2Fstable%2F.exe+download </li>
  <h3>Minikube commands</h3>
  <li>minikube start: to create a new cluster</li>
  <li>kubectl cluster-inf</li>
  <h3>Create a namespace using .yml file</h3>
  <li>kubectl apply -f namespace.yml</li>
  <h3>show all namespaces</h3>
  <li>kubectl get ns</li>
  <h3>Create deployment with .yml file. First you need to deploy MySQL for spring boot</h3>
  <li>kubectl apply -f mysql-pv-pvc.yml</li>
  <li>kubectl apply -f mysql-deployment.yml</li>
  <h3>make sure that the mysql is deployied and running, then deploy your application, run the following commands</h3>
  <li>kubectl get pods -n development</li>
  <li>kubectl describe pod mysqldb-xxllxlxlx -n development</li>
  <li>kubectl apply -f deployment.yml</li>
  <h3>now check both application are running and intract with kubernetes mysql run the  following command</h3>
  <li>kubectl run -it --rm --image=mysql:8.4 --restart=Never mysql-client1 -n development -- mysql -h mysqldb -p"aaAA11!!"</li>
  <h3>Delete a namespace</h3>
  <li>kubectl delete namespace development</li>
  <h3>delete a pod</h3>
  <li>kubectl delete pod podname</li>
  <h3>Check Pod Logs</h3>
  <li>kubectl logs pod-info-deployment-754cffbb9b-fktld -n development</li>
  <h3>Describe the Pod</h3>
  <li>kubectl describe pod pod-info-deployment-754cffbb9b-fktld -n development</li>
  <h3>Create a NodePort to access the kubernetes hosts outside</h3>
  <li>kubectl apply -f pod-info-service.yml</li>
  <li>kubectl describe svc pod-info-service -n development</li>
  <h3>to know the ip address of a node run the follwoing command</h3>
  <li>kubectl get nodes -o wide</li>
  <h2>Run you application from minikube</h2>
  <li><b>minikube service pod-info-service -n development</b></li>
  <h2>Expose your application to the internet with LoadBalancer</h2>
  <li>kubectl apply -f service.yml</li>
  <li>kubectl get services -n development</li>
  <li>minikube tunnel</li>
  <p>use the external-ip to browse your application in internet</p>
  <h2>To delete all yml file do the following command</h2>
  <li>kubectl delete -f your.ymalname.yml for example: kubectl delete -f deployment.yml, but remember you should delete the namespace.yml at end</li>
  <h2>Delete minikube</h2>
  <li>minikube delete</li>
  <hr />
  <h2>Usefull command of Kubernetes api</h2>
  <li>kubectl api-resources</li>
</ul>

<b>Flywaydb:</b>  Implement database migration tool that allows you to manage and automate the evolution of your database schema over time.

<b>Technologies Used</b>
<b>MySQL:</b> A robust relational database management system for storing your enterprise data.<br />
<b>Java Spring Boot:</b> A powerful framework for building Java-based enterprise applications, providing features such as dependency injection, RESTful web services, and more.<br />
<b>React:</b> A JavaScript library for building user interfaces, offering a component-based approach for creating interactive UIs.<br />

<h1>Prerequisites</h1>
<h3>Before getting started, ensure you have the following installed:</h3>
<ul>
  <li> Java Development Kit (JDK)</li>
  <li> Node.js and npm</li>
  <li> MySQL Server</li>
  <li> Docker (optional, for containerization)</li>
</ul><br>

<h2>Getting Started</h2>

<h2>Clone the repository:</h2> 
<b>git clone https://github.com/sarwaraminy/sprint-boot-with-react.git</b>

<h2>Backend Setup:</h2>

Navigate to the backend directory.<br />

Configure your MySQL database settings in application.properties.<br />

Run the Spring Boot application:<br />


./mvnw spring-boot:run<br />
Frontend Setup:<br />

Navigate to the frontend directory.<br />

<h2>Install dependencies:</h2>
npm install file-server<br />
npm install axios<br />
npm install react-router-dom <br />

npm install<br />
Start the React development server:<br />

npm start<br />
<h2>Access the Application:</h2>

Open your web browser and visit http://localhost:3000 to access the application.<br /><br />

<h2>Contributing</h2>
We welcome contributions from the community! Feel free to open issues for bug fixes or feature requests, and submit pull requests to contribute code.<br />

<h2>Deploy with tomcat:</h2> to deployee you need to do the following:<br />
<ul>
<li>Update pom.xml and add the tomcat dependency and update build pacakges</li>
<li>Update your Main application Class DemoApplication.java</li>
<li>Update pom.xml and add the tomcat dependency and update build pacakges</li>
<li>Update your Main application Class DemoApplication.java</li>
<li>run this command in your project: mvn clean package or 'mvn package -DskipTests=true'</li>
<li>After running this command, you should find the demo-0.0.1-SNAPSHOT.war file in the target directory.</li>
</ul>

<h1>Screenshots</h1>
<h3>Login page</h3>
<image alt="Room Login page" src="screenshots/login.png" />
<h3>Registraion page</h3>
<image alt="Room Registration page" src="screenshots/signup.png" />
<h3>Dashboard page</h3>
<image alt="Room Dashboard page" src="screenshots/dashboard.png" />
<h3>CRUD opration</h3>
<image alt="Room CRUD opration" src="screenshots/CRUD-opration.png" />


<b>License</b><br />
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license.<br />

<b>Contact</b><br />
If you have any questions or suggestions, please feel free to contact us at sarwaraminy@gmail.com .<br />

<b>Thank you for using our Enterprise Application! We hope it serves your needs effectively</b>.<br />
