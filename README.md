# Inactivity Detector (REACT)

A REACT-based inactivity detection system that tracks user interactions and displays an interactive UI when the user becomes inactive.

Built with **REACT**, **Tailwind CSS**, and **DaisyYI**, this project demonstrates pratical use of `useEffect`, `setTimeOut`, and event listeners for real-world UX behavior.

---

## Features

- Detects user inactivity after 30 seconds
- Tracks multiple interactions:
    - Mouse movement
    - Keyboard input
    - Click events
    - Scroll events
- Automatically resets inactivity timer on interaction
- Displays a full-screen interactive popup when user is inactive
- Clean UI using Tailwind CSS + DaisyUI components

---

## Core Concepts Used

- REACT functional components
- useState for UI state management
- useEffect for lifecycle control
- setTimeout / clearTimeout for inactivity logic
- Event listeners (mousemove, keydown, scroll, click)
- Conditional rendering

---

## How it works

1. User interacts with the page normally
2. A 30-second inactivity timer starts 
3. Any interaction resets the timer
4. If no interaction occurs:
    - A popup modal appears
    - The user is marked as inactive
5. Clicking "I'm back" restores active state

---

## UI / UX Behavior

- The app detects scrolling without clicks
- If the user only scrolls but does not click important sections:
    - The popup will guide the user 
    - It can indicate **where to click next**
    - Future improvement will add **animated guidance arrows**

This improves onboarding and prevents user confusion inside complex interfaces.

---

## Tech Stack

- REACT
- Tailwind CSS
- DaisyUI

---

## Future Improvements

### 1. Framer Motion Animations
- Smooth popup transitions
- Fade-in / fade-out effects
- Animated attention indicators (pulse, bounce, shake)

---

### 2. TypeScript Migration
- Strong typing for event handlers
- Safer state management
- Better scalability for larger applications

---

### 3. useRef Optimization
- Store timer reference without re-renders
- Prevent closure-related bugs
- Improve performance and reliability

---

### 4. Smart User Guidance System
- Detect when user scrolls but does not click
- Show contextual tooltips
- Highlight required sections
- Animated arrows pointing to actions
- Step-by-step guided interaction mode

---

### 5. Advanced UX Enhancements
- Idle warning countdown before popup
- Configurable inactivity duration
- Multi-step onboarding system
- Accessibility improvements (keyboard navigation support)

---

## Installation

```
npm install
npm run dev
```

## Learning Purpose

This project is designed to help understand:

- REACT lifecycle behavior
- Real-time user interaction tracking
- State vs non-state variables
- Event-driven UI design
- UX behavior modeling in modern web apps

---

## Author

Built as a learning project to master REACT hooks and real-world UI behavior systels.

---