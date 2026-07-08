# CareerOS – AI Career Intelligence Platform

CareerOS is a full-stack MERN application that helps users discover career opportunities they are eligible for based on their educational qualifications. Instead of manually searching through hundreds of opportunities, users can enter their academic profile and quickly identify careers that match their eligibility.

The primary objective of the platform is to simplify career discovery by providing qualification-based filtering and a centralized database of career opportunities.

> **USP:** *Find opportunities you're eligible for.*

---

# Problem Statement

Students and graduates often spend significant time searching multiple websites to determine whether they are eligible for a particular career opportunity. Every opportunity has different educational requirements, minimum qualifications, age criteria, and eligibility conditions.

CareerOS aims to simplify this process by allowing users to provide their qualifications and instantly view only those opportunities for which they meet the eligibility criteria.

---

# Objectives

* Simplify career discovery.
* Reduce manual effort in checking eligibility.
* Maintain a centralized repository of career opportunities.
* Provide an easy-to-use admin interface for managing opportunities.
* Build a scalable REST API architecture using the MERN stack.

---

# Key Features

## User Module

* User Registration
* Secure Login using JWT Authentication
* View available career opportunities
* Submit qualification details
* Find eligible opportunities based on qualification

---

## Qualification-Based Filtering

The core functionality of CareerOS is its eligibility engine.

Users can provide information such as:

* Highest Qualification
* Degree
* Stream
* Percentage/CGPA (optional)
* Category (if applicable)

The system compares the user's qualifications against the stored eligibility requirements of each opportunity and returns only the matching opportunities.

---

## Career Opportunity Management

Each career opportunity contains structured information such as:

* Career Name
* Organization
* Description
* Required Qualification
* Eligible Degrees
* Stream
* Category
* Application Link
* Last Date (optional)

---

## Admin Dashboard

The admin dashboard allows administrators to manage career opportunities efficiently.

Functions include:

* Add Career Opportunity
* Update Existing Opportunity
* Delete Opportunity
* View All Opportunities

---

## Authentication

CareerOS uses JSON Web Tokens (JWT) for authentication.

Features include:

* User Registration
* User Login
* Password Hashing
* Protected Routes
* Token-Based Authentication

---

# Technology Stack

## Frontend

* React.js
* Tailwind CSS

---

## Backend

* Node.js
* Express.js

---

## Database

* MongoDB

---

## Authentication

* JSON Web Token (JWT)

---

# REST API Overview

## Authentication

* Register User
* Login User

---

## Career APIs

* Get All Careers
* Get Career by ID
* Add Career
* Update Career
* Delete Career
* Find Eligible Careers

---

# Project Structure

```text
CareerOS
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

# Project Workflow

1. User creates an account.
2. User logs into the platform.
3. User enters qualification details.
4. CareerOS evaluates eligibility.
5. Matching career opportunities are displayed.
6. Administrators manage the opportunity database through the dashboard.

---

# Database Collections

## Users

Stores user account information.

Example fields:

* Name
* Email
* Password (Hashed)
* Role

---

## Careers

Stores all career opportunities.

Example fields:

* Title
* Organization
* Description
* Qualification
* Degree
* Stream
* Application Link

---

# Eligibility Engine

The eligibility engine performs rule-based filtering.

For every career opportunity:

* Compare required qualification with user qualification.
* Compare eligible degree.
* Compare stream (if applicable).
* Return only matching opportunities.

This enables users to discover opportunities relevant to their academic background.

---

# Security

* Password Hashing
* JWT Authentication
* Protected APIs
* Environment Variables for Sensitive Credentials

---

# Future Enhancements

Potential future improvements include:

* Advanced Search
* Resume Upload
* AI-Based Career Recommendations
* Bookmark Opportunities
* Email Notifications
* Application Tracking
* Career Analytics Dashboard

---

# Development Status

**This repository is currently under active development.**

The project is being built incrementally. Planned development milestones include:

* Project Setup
* Backend API Development
* MongoDB Integration
* Authentication
* Qualification-Based Eligibility Engine
* React Frontend
* Admin Dashboard
* Testing
* Deployment

---

# Author

Avinash

---

