---
slug: psr-standards
title: "PSR: The Standards That Organize PHP Code"
description: "Learn the most important PSR standards and how they are implemented in Laravel to write clean, organized, and maintainable PHP code."
date: 2024-11-27
image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
tags:
  - PHP
  - Laravel
  - PSR
  - Backend
category: "Backend"
authors:
  - name: "Nada Jboor"
    description: "Backend Developer"
    avatar:
      src: "https://ui-avatars.com/api/?name=Nada+Jboor&background=0D8ABC&color=fff"
    to: "#"
    target: "_blank"
    ui:
      name: "text-white"
      description: "text-gray-400"
---

# PSR: The Standards That Organize PHP Code

As PHP has evolved and the number of frameworks and packages has grown, the need for unified coding standards became clear.  
This led to the creation of **PHP-FIG**, a group consisting of representatives from major PHP frameworks like Laravel, Symfony, and Zend.

The group introduced a series of standards known as **PSR – PHP Standard Recommendations**, which became the foundation for writing professional, organized, and maintainable PHP code.

---

## What Is PSR?

PSR is a set of **official standards** that define how PHP code should be written and structured in a unified way.

Applying these standards ensures:

- Consistency in coding style  
- Compatibility across packages  
- Easier readability and maintenance  
- Improved quality in large-scale projects  

---

## Key PSR Standards Used in Laravel

### 1. PSR-1 — Basic Coding Standards

PSR-1 defines the essential rules that any PHP project should follow.

#### Naming Rules:

- Classes: Written in **StudlyCaps**  
- Methods & variables: Written in **camelCase**  
- File names must match class names  

---

### 2. PSR-4 — Autoloading Standard

PSR-4 is one of the most important PSRs because it powers **Composer’s autoloading system**.

- Each namespace maps to a physical directory  
- Classes are loaded automatically when needed  
- Laravel fully adopts PSR-4 to keep the project structure clean and logical  

---

### 3. PSR-12 — Extended Coding Style Guide

PSR-12 is the improved and extended version of PSR-2, offering a clearer and more unified style guide.

#### Key Rules:

- Use **4 spaces** for indentation (no tabs)  
- Place braces `{}` on a new line after class and method definitions  
- Add a space after keywords like `if` and `for`  
- Do not exceed **120 characters per line**  
- Use blank lines to improve readability  

Laravel itself is written following PSR-12 standards.

---

### 4. PSR-7 — HTTP Message Interfaces

PSR-7 defines a unified way to represent **HTTP requests and responses**.

In Laravel:

- The core does not rely directly on PSR-7  
- However, Laravel *can* convert requests/responses to PSR-7  
- **Guzzle**, used for API consumption, fully adopts PSR-7  

---

### 5. PSR-11 — Container Interface

PSR-11 provides a standard for how **Dependency Injection Containers** should behave.

In Laravel:

- It does not implement PSR-11 literally  
- But its **Service Container** is highly compatible with it  
- Supports service binding, constructor injection, and method injection  

---

## How Laravel Applies PSR Standards in Practice

- **Autoloading via PSR-4**: All classes in `app/` load automatically  
- **Code structure aligned with PSR-1 and PSR-12**  
- **PSR-7 support** for external API requests via Guzzle  
- **Service container compatible with PSR-11**  

---

## Why PSR Matters for Every Laravel Developer

- Cleaner and more understandable code  
- High maintainability and scalability  
- Better team consistency  
- Compatibility with other libraries and frameworks  
- More professional and reliable project structure  

---

## Tools That Help You Apply PSR Automatically

1. **PHP-CS-Fixer**  
   Automatically formats code according to PSR-12.

2. **PHP CodeSniffer**  
   Detects violations of PSR standards.

3. **PHPStorm & VSCode**  
   Both provide built-in support for PSR formatting rules.

---

## References

- Laracasts
