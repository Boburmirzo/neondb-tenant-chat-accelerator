# Multiuser AI Chat Solution Accelerator

## Introduction

Multiuser AI Chat Solution Accelerator uses [Neon Serverless Postgres](https://learn.microsoft.com/en-us/azure/partner-solutions/neon/overview) on Azure to allow organisations to deploy a private chat tenant in their Azure Subscription with dedicated database branches per user. It is a modified version of [Azure Chat Solution Accelerator](https://github.com/microsoft/azurechat) by replacing [Azure AI Search](https://learn.microsoft.com/en-GB/azure/search/) and [Azure CosmosDB](https://learn.microsoft.com/en-GB/azure/cosmos-db/nosql/) with [Neon](https://neon.tech/) for chat data storage and search functionality.

![Multiuser AI Chat Solution Accelerator with Neon](/assets/Multiuser%20AI%20Chat%20Solution%20Accelerator%20App%20View%201.png)

## Features

- 🔑 **Authentication and User Management**: Allows flexible login options, including OAuth providers like Google, GitHub, and Microsoft Entra ID (Azure AD).
- 🧠 **AI-Powered Conversations**: Chat with documents such as PDF. You can also buiild your own prompt templates.
- 💾 **Chat History**: Stores chat history with multiple chat threads, messages, and metadata.
- 🎨 **Customizable Chat Personas**: Personalizes conversations with user-defined chat personas. Manage persona settings directly from the application interface.
- 🛠️ **Extensions Support**: Extends chat functionalities by defining custom extensions. Store and manage extensions in the database, allowing dynamic interaction with custom workflows.
- 🎙️ **Speech and Voice Support**: Enables multilingual voice interactions in the chat application. Integrate Azure Speech Service for speech-to-text and text-to-speech capabilities.
- 🌐 **Deployment-Ready Architecture**: Fully deployable to Azure App Service with scalability for enterprise workloads.

## Solution Benefits

- **Private**: Offers both application and database level isolation with standalone single-tenant app with single-tenant database. You can use it with your own internal data sources (PDFs, Docs) or integrate with your internal services (APIs)
- **Cost-Efficient**: Combines relational storage, vector storage in a single platform reduces the need for additional services, lowering costs. Scale efficiently as your user base grows while keeping costs manageable.



## Technologies Used

### Azure Services

| **Service**                        | **Usage in the Project**                                                                                                     |
|-------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| **Azure OpenAI**                    | Provides models like GPT-4o for generating AI-powered conversational responses and vector embeddings for semantic search. |
| **Azure Key Vault**                 | Securely stores sensitive information such as API keys, secrets, and connection strings. Used for authentication and APIs.    |
| **Azure Blob Storage**              | Handles file storage and uploads for documents or media used in the chat system. Scalable solution for data backups.         |
| **Azure App Service**               | Hosts the web application, REST APIs, and back-end services. Provides a managed environment to deploy and run the solution.   |
| **Azure Monitor**                   | Tracks and monitors application performance, errors, and logs. Helps in diagnosing issues and optimizing performance.         |
| **Microsoft Entra ID (Azure AD)**   | Provides secure user authentication and authorization through OAuth2.0. Integrates with organizational identity systems.       |
| **Azure Document Intelligence**     | Automates data extraction from uploaded documents using AI and OCR (Optical Character Recognition).                          |
| **Azure Speech Service**            | Converts speech to text and vice versa, enabling voice commands or responses in the chat system. Supports multilingual use.   |


### Development Tools

- [Node.js 18](https://nodejs.org/en): an open-source, cross-platform JavaScript runtime environment.

- [Next.js 13](https://nextjs.org/docs): enables you to create full-stack web applications by extending the latest React features

- [NextAuth.js](https://next-auth.js.org/): configurable authentication framework for Next.js 13

- [OpenAI sdk](https://github.com/openai/openai-node) NodeJS library that simplifies building conversational UI

- [Tailwind CSS](https://tailwindcss.com/): is a utility-first CSS framework that provides a series of predefined classes that can be used to style each element by mixing and matching

- [shadcn/ui](https://ui.shadcn.com/): re-usable components built using Radix UI and Tailwind CSS. 


## Solution Architecture

The following high-level diagram depicts the architecture of the solution accelerator:

## 👨🏻‍💻 Run Locally

Clone this repository locally or fork it to your Github account.

### Prerequisites

- Neon Database: Create a Neon resource on [Azure](https://fyi.neon.tech/azureportal) (or directly via the [Neon Console](https://console.neon.tech/)), if you haven't already provisioned it together with other Azure resources. After creating the instance, set up the required database schemas by running the SQL scripts located in the `data` folder.

- Access the [Neon instance](https://console.neon.tech) and run the SQL queries from the [data folder](/data/schema.sql) to set up the database schema. These include tables like `chat_threads`, `chat_messages`, `personas`, `extensions`, `documents`, and `prompts`.

- Identity Provider: For local development, you have the option of using a username/password. If you prefer to use an Identity Provider, [follow the instructions](/docs/add-identity.md) to configure one.

### Steps

1. Change directory to the `src` folder
2. Rename the file `.env.example` to `.env.local` and populate the environment variables based on the deployed resources in Azure.
3. Install npm packages by running `npm install`
4. Start the app by running `npm run dev`
5. Access the app on [http://localhost:3000](http://localhost:3000)

You should now be prompted to login with your chosen OAuth provider.

> [!NOTE]
> If using Basic Auth (DEV ONLY) any username you enter will create a new user id (hash of username@localhost). You can use this to simulate multiple users. Once successfully logged in, you can start creating new conversations.


## Deployment Options

You can deploy the application using one of the following options:

- [1. Azure Developer CLI](#azure-developer-cli)
- [2. Azure Portal Deployment](#azure-portal-deployment)

### 1. Azure Developer CLI

> [!IMPORTANT]
> This section will create Azure resources and deploy the solution from your local environment using the Azure Developer CLI. Note that you do not need to clone this repo to complete these steps.

1. Download the [Azure Developer CLI](https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/overview)
1. If you have not cloned this repo, run `azd init -t microsoft/azurechat`. If you have cloned this repo, just run 'azd init' from the repo root directory.
1. Run `azd up` to provision and deploy the application

```pwsh
azd init -t microsoft/azurechat
azd up

# if you are wanting to see logs run with debug flag
azd up --debug
```

### 2. Azure Portal Deployment

> [!WARNING]
> This button will only create Azure resources. You will still need to deploy the application by following the [deploy to Azure section](/docs/deploy-to-azure-github-actions.md) to build and deploy the application using GitHub actions.

Click on the Deploy to Azure button to deploy the Azure resources for the application.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/anzappazurechatgpt)

> [!IMPORTANT]
> The application is protected by an identity provider and follow the steps in [Add an identity provider](/docs/add-identity.md) section for adding authentication to your app.


## About Neon

 [Neon](https://neon.tech/) is a serverless, fully managed PostgreSQL database service optimized for modern applications. Neon's advanced features include autoscaling, scale-to-zero, database branching, instant point-in-time restore, and time travel queries. Neon manages the Postgres infrastructure, including database configuration, maintenance, and scaling operations, allowing you to focus on building and optimizing your applications.