Geek Codex

https://geekcodex.org

Although fully deployed on Amazon Web Services. This application is meant to be a personal project.

Introducing a dynamic web application designed to showcase and discover creative portfolios! Users can make simple posts that include an image, summary, and a URL while engaging with others by liking, and following. The content of each post could be a blog, GitHub repository, or a link personal website. Register to expose your work!

Demo Page 1

![image](https://github.com/FzComet206/GeekCodex-Client/assets/24278214/022adaf6-81be-4536-be80-27ec5ecc1f78)



Website Functionalities:

    - User login/logout/register/email verification/reset password
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
    - Infinite scrolling

Tech stacks:

    - Language: Typescript, SQL
    - Frontend: NextJS 13, React, ChakraUI
    - Backend: NodeJS, Express, Express-session, Redis, Postgresql, Drizzle-orm, various other libraries.
    - API: Restful
    - Cloud: AWS EC2, AWS RDS, AWS S3, AWS Route53, AWS Application Load Balancer, AWS Certificate Manager, AWS ElasticCache, AWS SES


Deployment:

Both the nextjs and nodejs servers are built with docker and deployed on Amazon Web Services EC2. The applicaiton uses a postgresql database connection from AWS RDS, and a Redis cache connection from AWS ElasticCache. All of which uses the free tier.

The domain name GeekCodex.org is purchased from AWS Route 53, and Https requests from this domain is routed to AWS Applicaiton Load Balancer, which holds a Https certificate from AWS ACM and target the EC2 instance at port 80.

Below is a self drawn application architecture diagram:
![image](https://github.com/FzComet206/GeekCodex-Client/assets/24278214/3eba6e43-dbdc-4774-85ee-647e048c710f)

Example flow for a Post action:

1. User submits post data
2. Nextjs client side check for length limits, sends post requests to Nextjs api
3. Nextjs api sends post request to Nodejs server alone with cookie-header. Request payload contains title, summary, link
4. Nodejs api validate user session and length limits, generate a image url, insert the imageurl into database alone with other data.
5. Nodejs returns the image url in response to Nextjs api
6. Nextjs api use the image url and image buffer to store image to S3
7. Everytime user renders a post, the data are retrieved from backend, then broswer renders image directly from S3 with url.

Example flow for user registration:
1. User submits name, email, password, confirm password in Browser
2. Request flow from Nextjs client ----> Nextjs ----> Nodejs
3. Nodejs validate data length and hash password.
4. Nodejs generate a uuid token and set Redis cache for name, email, password hash with the key being the token
5. Nodejs sends a email through AWS SES alone with the token.
5. User clicks on the link in the email "https://geekcodex.org/auth/verify/token" which is a link to Nextjs client
6. Nextjs client retrieve token from browser and send request to Nextjs API ----> Nodejs API
7. Nodejs verify the token exist in Redis cache, retrieve name, email, password hash, and store them in postgreql users table 
8. Nodejs create a user session, store the session cookie in Redis, and sends back the cookie.
9. Response propagate back to use browser with the cookie, and user is now registered and loggedin.
10. Everytime user change routes or refresh, browser sends a "me" request alone with cookie for authentication.

Entity Relationship Diagram for postgres:
![image](https://github.com/FzComet206/GeekCodex-Client/assets/24278214/8c68e28b-2401-48bc-9c69-0bf255aaa17f)
