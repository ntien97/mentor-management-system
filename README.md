# MentorManagementSystem

✨ **Disclaimer** ✨

This repository was created in two days by one software engineer. Please keep in mind that it is not ready for production; do not use it as a reference for your production application.

## Live deployment

≫ https://d3f7ambtiwtf5o.cloudfront.net/dashboard

```yaml
SUPER: 
  username: super@mail.com
  password: superadmin
```

## Stories

This application has a simple logic and was designed primarily for educational purposes.

- There are three sorts of users: STUDENT, SUPER, MENTOR

- SUPER has the authority to add and deactivate MENTOR and STUDENT accounts. 
- STUDENT has access to all accessible MENTORS. All STUDENTS are visible to MENTORS.
- All users can log in using the email address and password that SUPER assigned to them when they were created.
  - Please keep in mind that no email service was used. 
  - Emails were just used as usernames due to their unique format.

## Features

Here are the features that are known to work and those that are known not to work.

### Log-in function

- The log-in function is operational, and after logging in, a user will be provided an access token (JWT) that will allow them to access other APIs for 1 hour.

- There is no refresh token flow enabled; if the user makes another API call after 1 hour, they will be logged out and redirected back to the login page.

### List function

- The API for the student list and mentor list are separated for future updates.

- There is currently no authorisation feature on the backend. So, despite the fact that it appears that the student list is only displayed on the mentor page (and vice versa). API calls are not yet obstructed.

### Add, Delete, Edit

- APIs are accessible for the add and delete functions. Only the SUPER page has the modification buttons.
  
- The edit function is not yet available.
  
- As with other APIs, no authorization is yet in place.

## Technical stack

Even with the time constraint, I want this to be an opportunity for me to learn new approaches. Here is what is used on this repository by balancing my regularly used and branch new technological skills.

|                | Library              | Note                                                                                                                                                                               |
|----------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Frontend       | Angular 15 + Taiga UI | Angular is a framework that I am familiar with. But this is the first time I've used it with Taiga UI. In my perspective, the UI looks a little more modern than Google Material Design. |
| Backend        | NestJS + Postgres    | Until now, I have generally used NestJS to deploy Lambda Functions. This time, it's fascinating to use it as a node server.                                                        |
| Infrastructure | Terraform with AWS   | I realized I'd never used Amazon Web Services' free tier. It was therefore intriguing to maintain all of the resources on the free tier.                                                                                                                                                                                  | 

Notable libraries in terms of core features

- [ngrx](https://ngrx.io/): State management on the Front-end.

- [typeorm](https://typeorm.io/): Connect to RDS (Postgres)

- [passport-jwt](http://www.passportjs.org/packages/passport-jwt/): generate access tokens

- [bcryptjs](https://github.com/dcodeIO/bcrypt.js): hashing the password

# AWS Infrastructure

**ToBeAdded** 
