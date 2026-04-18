# React Concepts Used in This Project

## Hooks

- **`useState`** — manages `chatHistory`, `loading`, and `input` field state across components
- **`useEffect`** — auto-scrolls to the latest message whenever chat history updates
- **`useRef`** — holds a reference to the bottom of the chat (`chatEndRef`) for smooth scrolling
- **Custom hook `useChat`** — encapsulates all chat state and logic, keeping components clean

---

## Component Architecture

- **Functional components** throughout — no class components
- **Single responsibility principle** — each component does one thing (`MessageBubble`, `TypingIndicator`, `EmptyState`, etc.)
- **Smart vs dumb components** — `App.jsx` is the smart/container component that holds state; `ChatWindow`, `MessageBubble` etc. are dumb/presentational components that just receive props

---

## Props

- Passing data down via props (`chatHistory`, `loading` into `ChatWindow`)
- Passing callbacks up via props (`onSend`, `onHintClick`) — classic **lifting state up** pattern

---

## Event Handling

- `onChange` on the text field for controlled input
- `onKeyDown` to detect Enter key and trigger send
- `onClick` on buttons and hint chips

---

## Controlled Components

The input field in `InputBar` is fully controlled — its value is always driven by React state, not the DOM.

---

## List Rendering

`chatHistory.map()` with a `key` prop to render message bubbles dynamically.

---

## Conditional Rendering

- `&&` operator to show `EmptyState` only when there are no messages
- `&&` to show `TypingIndicator` only when `loading` is true
- Ternary `isUser ? ... : ...` to switch bubble styles between user and bot

---

## Module System

- **Named exports** (`useChat`, `askResume`, `HINT_QUESTIONS`) vs **default exports** for components
- Clean separation of concerns across `api/`, `hooks/`, `constants/`, `components/`
