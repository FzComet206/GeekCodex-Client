Geek Codex

https://geekcodex.org

Although fully deployed on Amazon Web Services. This application is meant to be a personal project.

Introducing a dynamic web application designed to showcase and discover creative portfolios! Users can make simple posts that include an image, summary, and a URL while engaging with others by liking, and following. The content of each post could be a blog, GitHub repository, or a link personal website. Register to expose your work!

Demo Page 1

![image](https://github.com/FzComet206/GeekCodex-Client/assets/24278214/d2269e02-c921-4455-8593-a02acee4f355)


Dem0 Page 2

![image](https://github.com/FzComet206/GeekCodex-Client/assets/24278214/188fa75e-787b-49db-b247-bc3600dcef84)


Demo Page 3

![image](https://github.com/FzComet206/GeekCodex-Client/assets/24278214/83991363-3948-4370-8fb0-c990bbe6c1a5)



Website Functionalities:

    - User login/logout/register/reset
    - Create/delete posts
    - View posts feed
    - View self-posts
    - View liked posts
    - Search for posts
    - Like posts
    - Follow users
    - View Dashboard
    - View posts of followed users
    - Sort posts by number of likes and date of creation
    
Tech stacks:

    - Language: Typescript, SQL
    - Frontend: NextJS 13, React, ChakraUI
    - Backend: NodeJS, Express, Express-session, Redis, Postgresql, Drizzle-orm, various other libraries.
    - API: Restful
    - Cloud: AWS EC2, AWS RDS, AWS S3, AWS Route53, AWS Application Load Balancer, AWS Certificate Manager, AWS ElasticCache


Deployment:

Both the nextjs and nodejs servers are built with docker and deployed on Amazon Web Services EC2. The applicaiton uses a postgresql database connection from AWS RDS, and a Redis cache connection from AWS ElasticCache. All of which uses the free tier.

The domain name GeekCodex.org is purchased from AWS route 53, and Https requests from this domain is routed to AWS Applicaiton Load Balancer, which holds a Https certificate from AWS ACM and target the EC2 instance at port 80.

Below is a self drawn application architecture diagram:
![image](https://github.com/FzComet206/GeekCodex-Client/assets/24278214/3eba6e43-dbdc-4774-85ee-647e048c710f)


Entity Relationship Diagram for postgres:
![image](https://github.com/FzComet206/GeekCodex-Client/assets/24278214/8c68e28b-2401-48bc-9c69-0bf255aaa17f)



