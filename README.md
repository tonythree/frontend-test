# Frontend Developer Technical Test

## Overview

This is a technical assessment for a **Frontend Developer** position. You will be building a profile settings feature using modern React technologies and best practices.

## 🎯 Objective

Create a **Profile Settings Page** with a dropdown interface that allows users to view and edit their profile information using a well-structured form with proper validation.

## 🛠 Technical Requirements

### Core Technologies

- **React 19+** with **Next.js 15+** (App Router)
- **Shadcn/ui** for UI components
- **Tailwind CSS** for styling
- **Zod** for form validation
- **React Query (TanStack Query)** for data fetching and mutations
- **TypeScript** (recommended)

### Setup Instructions

1. The nextjs project is already setup with shadcn, tailwind and react-query.
2. Install the required Shadcn/ui components for the ui.

## 📋 Feature Specifications

### Profile Settings Page

Create a profile settings page accessible at `/profile/settings` with the following requirements:

#### Data Management

- **Mock Data**: Create a `data/user.json` file with sample user data
- **GET Request**: Use React Query to fetch user data on page load (mock the API call with the user.json)
- **Mutation**: Use React Query for save operations (no API call, console.log the result)

## 🏗 Implementation Details

### Form Validation Schema (Zod)

- Name must be at least 2 characters and maximum 30 characters.
- Surname must be at least 2 characters and maximum 30 characters.
- Email must have a valid structure.
- Webpage must be a valid url but http:// or https:// is not required.

### Mock Data Structure

```json
{
  "user": {
    "id": "1",
    "name": "John",
    "surname": "Doe",
    "email": "john.doe@example.com",
    "webpage": "https://johndoe.dev"
  }
}
```

## ✅ Acceptance Criteria

### Functional Requirements

- [ ] Profile settings page loads without errors
- [ ] Form displays current user data on initial load
- [ ] All form fields are properly validated using Zod
- [ ] Save button shows loading state during submission
- [ ] Success/error messages are displayed appropriately
- [ ] Form validation errors are displayed inline
- [ ] Console shows submitted data on save

### Technical Requirements

- [ ] Uses React Query for data fetching and mutations
- [ ] Implements proper error handling
- [ ] Uses Shadcn/ui components correctly
- [ ] Follows Tailwind CSS best practices
- [ ] Code is properly typed (if using TypeScript)
- [ ] Components are reusable and well-structured
- [ ] Follows React best practices (hooks, state management)

### UI/UX Requirements

- [ ] Follows the UX/UI defined in the Design reference file (Figma)
- [ ] Responsive design (mobile-first approach)
- [ ] Proper loading states
- [ ] Intuitive user interface
- [ ] Consistent spacing and typography
- [ ] Proper contrast and accessibility considerations

## 🎨 Design Reference

> **Note**: Figma design link will be provided separately

## 📚 Resources

### Documentation

- [Next.js App Router](https://nextjs.org/docs/app)
- [Shadcn/ui Components](https://ui.shadcn.com/)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Zod Validation](https://zod.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Support

If you have any questions or need clarifications, please ask.

---

**Good luck with your technical test!** 🚀
