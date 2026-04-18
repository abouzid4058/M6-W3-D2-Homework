# Router Params — Module 6, Week 3, Day 2 Homework

A React app demonstrating React Router v5 URL parameters using `useParams` hook. Clicking a streaming service logo displays its name via route parameter passing.

## 🚀 Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Dependencies

| Package | Version |
|---|---|
| react | ^17.0.2 |
| react-dom | ^17.0.2 |
| react-scripts | 4.0.3 |
| react-router-dom | ^5.2.0 |
| bootstrap | ^5.0.1 |

---

## 💡 How It Works

1. Each streaming app logo is wrapped in a `<Link to="/appname">` 
2. Clicking navigates to `/:id` — e.g. `/netflix`, `/hulu`
3. The `<Switch>` + `<Route path="/:id">` matches any name
4. The `Child` component calls `useParams()` to read `{ id }` from the URL
5. `{id}` is displayed in the JSX: **"You Selected: Netflix"**

---

## 📁 Project Structure

```
src/
├── App.js      # Router, Links, Switch/Route, Child with useParams
├── App.css     # CustomStyles.css (img sizing, h3 positioning)
└── index.js    # Entry point
```

---

## 📝 Submission

- **Due:** This Sunday, 10:30 PM PT
- **Submit:** Post GitHub URL on GAP Week 7 Day 2 Homework
