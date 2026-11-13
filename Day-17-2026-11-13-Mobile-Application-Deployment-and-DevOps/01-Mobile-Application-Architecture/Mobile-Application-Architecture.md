# Task 1: Mobile Application Architecture

## 1. Introduction

Mobile application architecture describes how a mobile application is structured, how its internal components work together, and how it communicates with external systems such as APIs, backend servers, databases, and cloud services.

It provides a blueprint for developing, testing, deploying, securing, and maintaining mobile applications.

Examples include:
- Banking applications
- Shopping applications
- Food delivery applications
- Healthcare applications
- Social media applications

## 2. Main Layers of Mobile Application Architecture

A typical mobile application can be organized into the following layers.

### 2.1 Presentation Layer

The presentation layer is the user-facing part of the application.

Responsibilities:
- Display screens and user interfaces.
- Accept user input.
- Handle navigation between screens.
- Display API responses and error messages.
- Show loading indicators and notifications.

Examples:
- Login screen
- Registration screen
- Home screen
- Product list
- User profile

### 2.2 Business Logic Layer

This layer manages application rules and operations.

Responsibilities:
- Validate user input.
- Process user actions.
- Apply business rules.
- Manage application state.
- Coordinate operations between the presentation and data layers.

Example:

When a user logs in, the application checks whether required fields are entered and initiates the authentication operation.

### 2.3 Data Layer

The data layer manages how application information is retrieved and stored.

Responsibilities:
- Communicate with backend APIs.
- Retrieve and update information.
- Manage local storage.
- Cache frequently accessed information.
- Handle network failures.
- Coordinate data sources.

Common technologies:
- Retrofit
- URLSession
- SQLite
- Room Database
- Core Data
- UserDefaults
- Android DataStore

### 2.4 Backend and API Layer

The backend runs on servers and provides services to mobile applications.

Responsibilities:
- Process API requests.
- Authenticate users.
- Apply business rules.
- Validate incoming information.
- Communicate with databases.
- Integrate external services.

Common backend technologies:
- Node.js
- Java Spring Boot
- Python Django
- ASP.NET Core
- Go

### 2.5 Database and Cloud Layer

This layer stores application information and provides the infrastructure required to run backend services.

Database examples:
- PostgreSQL
- MySQL
- MongoDB
- Azure SQL Database
- Azure Cosmos DB

Cloud platforms:
- Microsoft Azure
- Amazon Web Services
- Google Cloud

Cloud infrastructure can provide application hosting, storage, databases, networking, monitoring, and security services.

## 3. Android Application Architecture

Android is Google's mobile operating system. Android applications are commonly developed using Kotlin or Java.

Android development commonly uses Android Studio and the Android SDK.

### Important Android Components

| Component | Purpose |
|---|---|
| Activity | Represents a screen or user interaction entry point |
| Fragment | Represents a reusable part of a user interface |
| ViewModel | Manages UI-related state and data |
| Repository | Provides a central interface for accessing data |
| Room | Local database persistence library |
| Retrofit | HTTP client commonly used for API communication |
| WorkManager | Schedules reliable background tasks |
| Android SDK | Tools and libraries used to develop Android applications |

### Android Application Flow

1. The Activity displays the application screen.
2. The user performs an action.
3. The ViewModel processes the UI action.
4. The Repository requests data from an API or local database.
5. The backend processes the request.
6. The response returns to the application.
7. The ViewModel updates the screen.

### Android Lifecycle

An Android application has a lifecycle that developers must manage.

Important Activity lifecycle methods include:
- onCreate()
- onStart()
- onResume()
- onPause()
- onStop()
- onDestroy()

Lifecycle management helps applications handle screen changes, background operations, and resource usage.

## 4. iOS Application Architecture

iOS is Apple's mobile operating system. iOS applications are commonly developed using Swift or Objective-C.

Xcode is Apple's primary development environment.

### Important iOS Components

| Component | Purpose |
|---|---|
| SwiftUI | Framework for building user interfaces |
| UIKit | Framework for traditional iOS user interfaces |
| ViewController | Manages a screen and its interactions |
| ViewModel | Manages presentation state in MVVM architecture |
| URLSession | Performs HTTP network requests |
| Core Data | Framework for persistent data management |
| UserDefaults | Stores simple application preferences |
| Keychain | Securely stores sensitive credentials and keys |

### iOS Application Flow

1. SwiftUI or UIKit displays the screen.
2. The user performs an action.
3. The ViewModel processes the action.
4. A service or repository uses URLSession to communicate with the API.
5. The backend processes the request.
6. The response returns to the application.
7. The user interface displays the result.

### iOS Lifecycle

iOS applications move between different execution states, including:
- Not running
- Inactive
- Active
- Background
- Suspended

Developers must manage application state, background execution, permissions, and resources.

## 5. Android vs iOS

| Feature | Android | iOS |
|---|---|---|
| Platform | Google Android | Apple iOS |
| Languages | Kotlin, Java | Swift, Objective-C |
| IDE | Android Studio | Xcode |
| UI frameworks | Jetpack Compose, Android Views | SwiftUI, UIKit |
| Local database | Room, SQLite | Core Data, SQLite |
| Networking | Retrofit, OkHttp | URLSession |
| Secure storage | Android Keystore | Apple Keychain |
| App distribution | Google Play | Apple App Store |

Both platforms can communicate with the same backend APIs when the backend is designed to support them.

## 6. Mobile Application Architecture Patterns

Architecture patterns help developers organize code and separate responsibilities.

### MVC - Model View Controller

- Model: Manages application data.
- View: Displays the user interface.
- Controller: Handles user actions and coordinates the Model and View.

### MVP - Model View Presenter

- Model: Manages data.
- View: Displays information.
- Presenter: Handles presentation logic and coordinates the View and Model.

### MVVM - Model View ViewModel

- Model: Represents application data.
- View: Displays the user interface.
- ViewModel: Manages presentation state and UI-related logic.

MVVM is commonly used in modern Android and iOS applications because it separates UI responsibilities from data and business logic.

## 7. How Mobile Applications Communicate with Backend APIs

Mobile applications commonly use HTTPS and REST APIs to communicate with backend services.

Example request:

    GET https://api.example.com/products/101

Example JSON response:

    {
      "productId": 101,
      "productName": "Laptop",
      "price": 55000,
      "availability": true
    }

Communication flow:

1. Mobile client sends an HTTPS request.
2. Backend API receives the request.
3. Backend validates the request and user permissions.
4. Backend retrieves information from the database.
5. Backend returns a response, commonly in JSON format.
6. Mobile application processes and displays the result.

Other communication technologies include gRPC and WebSockets, depending on application requirements.

## 8. Security Considerations

Mobile applications must protect user information and communication.

Important practices:

- Use HTTPS to encrypt network traffic.
- Implement secure authentication.
- Apply authorization checks on backend services.
- Store sensitive credentials using Android Keystore or Apple Keychain.
- Never store passwords in plain text.
- Avoid embedding private server credentials in mobile applications.
- Validate user input on the backend.
- Use secure token storage and appropriate token expiration.
- Keep application dependencies updated.
- Monitor security events and application failures.

## 9. Real-World Example: Shopping Application

Consider an online shopping application.

1. A user opens the Android or iOS application.
2. The application displays available products.
3. The user selects a product.
4. The mobile client sends an API request.
5. The backend validates and processes the request.
6. The backend retrieves product details from the database.
7. The backend returns the product information.
8. The mobile application displays the product.
9. The user places an order.
10. The backend processes the order and stores the order details.

## 10. Key Concepts

| Concept | Meaning |
|---|---|
| Mobile client | Application installed on a mobile device |
| Frontend | User-facing part of an application |
| Backend | Server-side application logic |
| API | Interface used for communication between systems |
| Database | Stores application information |
| Cloud | Provides hosted infrastructure and services |
| Authentication | Verifies user identity |
| Authorization | Determines user permissions |
| Cache | Stores frequently used data for faster access |
| SDK | Software Development Kit |
| Lifecycle | Different execution states of an application |

## 11. Conclusion

Mobile application architecture defines how mobile interfaces, application logic, data layers, backend APIs, databases, and cloud infrastructure work together.

Android and iOS use different development frameworks and platform components, but both can communicate with shared backend services through APIs.

Understanding this architecture is important for application development, DevOps automation, CI/CD implementation, deployment, monitoring, and maintenance.

## 12. Architecture Diagram

Refer to:

    ../diagrams/mobile-application-architecture.md

The diagram illustrates Android and iOS clients, application layers, API communication, backend services, databases, cloud infrastructure, and monitoring.
