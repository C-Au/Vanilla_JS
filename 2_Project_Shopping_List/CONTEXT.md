# Shopping List - Domain Model

## Ubiquitous Language

### Template
A **Template** is a reusable shopping list definition saved by the user. It contains a set of item names that the user frequently shops for. Templates are snapshots — once created, they are independent. A user can modify a template without affecting any active trips created from it.

**Properties:**
- `id` — unique identifier
- `name` — user-provided name (e.g., "Weekly Groceries", "Party Supplies")
- `items` — array of item names

### Active Trip
An **Active Trip** is a single shopping session created from a template. It starts with items copied from the template and can be modified during the shopping trip (add/remove items, toggle completion status). A user works with only one active trip at a time.

**Properties:**
- `id` — unique identifier
- `sourceTemplateId` — the template this trip was created from (for reference only)
- `items` — array of item objects with status

### Item
An **Item** is a product the user intends to buy. In the current phase, items are simple:

**Properties:**
- `name` — the product name (e.g., "Milk", "Bread")
- `completed` — boolean flag indicating whether the item was found/bought

### Completed vs. Incomplete
An item is **completed** when the user has found and picked up the product. The user toggles this status as they shop by clicking on the item in the list. Completed items are visually distinct (e.g., strikethrough).

### Clear Completed
**Clear Completed** is an action that removes all completed items from the active trip. This is the only deletion mechanism during shopping; users cannot delete individual incomplete items mid-trip.

---

## Key Decisions

1. **Reusable lists over one-time carts** — Templates are the unit of reuse, trips are instances.
2. **Templates are snapshots** — A trip is independent of its source template after creation.
3. **Toggle-only shopping flow** — Users mark items complete/incomplete as they shop; no mid-trip individual deletion.
4. **Persistence via localStorage** — Both templates and active trip survive page refresh.
5. **Manual template creation** — Users proactively create templates; saving from trips is a future phase.
6. **Single active trip** — Only one trip can be in progress at a time.

---

## Domain Boundaries

### In Scope
- Create, view, delete templates
- Load a template to start a new trip
- Toggle items complete/incomplete during a trip
- Clear completed items from a trip
- Add new items to an active trip
- Persist all state to localStorage

### Out of Scope (Future Phases)
- Categories or tags for items
- Quantity tracking
- Price estimation
- Saving a trip as a template
- Multi-user sync
- Item history or analytics

