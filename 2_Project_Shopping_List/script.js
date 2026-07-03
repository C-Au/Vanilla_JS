// ============================================
// DATA MODEL
// ============================================

let templates = [];
let activeTrip = null;

const STORAGE_KEY_TEMPLATES = "shoppingList_templates";
const STORAGE_KEY_TRIP = "shoppingList_activeTrip";

// ============================================
// STORAGE & INITIALIZATION
// ============================================

function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY_TEMPLATES, JSON.stringify(templates));
  localStorage.setItem(STORAGE_KEY_TRIP, JSON.stringify(activeTrip));
}

function loadFromLocalStorage() {
  const stored = localStorage.getItem(STORAGE_KEY_TEMPLATES);
  const trip = localStorage.getItem(STORAGE_KEY_TRIP);
  
  if (stored) {
    templates = JSON.parse(stored);
  }
  if (trip) {
    activeTrip = JSON.parse(trip);
  }
}

// ============================================
// TEMPLATE OPERATIONS
// ============================================

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function createTemplate(name) {
  if (!name.trim()) return;
  
  const template = {
    id: generateId(),
    name: name.trim(),
    items: []
  };
  
  templates.push(template);
  saveToLocalStorage();
  renderTemplatesList();
  document.getElementById("templateNameInput").value = "";
}

function deleteTemplate(templateId) {
  templates = templates.filter(t => t.id !== templateId);
  saveToLocalStorage();
  switchView("templates");
  renderTemplatesList();
}

function addItemToTemplate(templateId, itemName) {
  if (!itemName.trim()) return;
  
  const template = templates.find(t => t.id === templateId);
  if (template) {
    template.items.push(itemName.trim());
    saveToLocalStorage();
    renderTemplateDetail(templateId);
    document.getElementById("templateItemInput").value = "";
  }
}

function removeItemFromTemplate(templateId, itemIndex) {
  const template = templates.find(t => t.id === templateId);
  if (template) {
    template.items.splice(itemIndex, 1);
    saveToLocalStorage();
    renderTemplateDetail(templateId);
  }
}

// ============================================
// TRIP OPERATIONS
// ============================================

function startTrip(templateId) {
  const template = templates.find(t => t.id === templateId);
  if (!template) return;
  
  // Create a trip with items copied from the template
  activeTrip = {
    id: generateId(),
    sourceTemplateId: templateId,
    sourceTemplateName: template.name,
    items: template.items.map(name => ({ name, completed: false }))
  };
  
  saveToLocalStorage();
  switchView("trip");
  renderTrip();
}

function endTrip() {
  activeTrip = null;
  saveToLocalStorage();
  switchView("trip");
  renderTrip();
}

function addItemToTrip(itemName) {
  if (!activeTrip || !itemName.trim()) return;
  
  activeTrip.items.push({ name: itemName.trim(), completed: false });
  saveToLocalStorage();
  renderTrip();
  document.getElementById("tripItemInput").value = "";
}

function toggleItemInTrip(index) {
  if (!activeTrip || index < 0 || index >= activeTrip.items.length) return;
  
  activeTrip.items[index].completed = !activeTrip.items[index].completed;
  saveToLocalStorage();
  renderTrip();
}

function clearCompletedInTrip() {
  if (!activeTrip) return;
  
  activeTrip.items = activeTrip.items.filter(item => !item.completed);
  saveToLocalStorage();
  renderTrip();
}

// ============================================
// RENDERING
// ============================================

function renderTemplatesList() {
  const container = document.getElementById("templatesList");
  container.innerHTML = "";
  
  if (templates.length === 0) {
    container.innerHTML = "<p class='empty-message'>No templates yet. Create one to get started!</p>";
    return;
  }
  
  templates.forEach(template => {
    const div = document.createElement("div");
    div.className = "template-card";
    div.innerHTML = `
      <h3>${template.name}</h3>
      <p>${template.items.length} item${template.items.length !== 1 ? "s" : ""}</p>
      <button class="template-view-btn" data-id="${template.id}">View & Edit</button>
    `;
    container.appendChild(div);
  });
}

function renderTemplateDetail(templateId) {
  const template = templates.find(t => t.id === templateId);
  if (!template) return;
  
  document.getElementById("templateDetailTitle").textContent = template.name;
  document.getElementById("startTripButton").dataset.templateId = templateId;
  document.getElementById("deleteTemplateButton").dataset.templateId = templateId;
  
  const itemsList = document.getElementById("templateItemsList");
  itemsList.innerHTML = "";
  
  if (template.items.length === 0) {
    itemsList.innerHTML = "<li class='empty-message'>No items yet</li>";
    return;
  }
  
  template.items.forEach((itemName, index) => {
    const li = document.createElement("li");
    li.className = "template-item";
    li.innerHTML = `
      <span>${itemName}</span>
      <button class="remove-btn" data-template-id="${templateId}" data-index="${index}">Remove</button>
    `;
    itemsList.appendChild(li);
  });
}

function renderTrip() {
  const noTripMsg = document.getElementById("noTripMessage");
  const tripContent = document.getElementById("tripContent");
  
  if (!activeTrip) {
    noTripMsg.style.display = "block";
    tripContent.style.display = "none";
    return;
  }
  
  noTripMsg.style.display = "none";
  tripContent.style.display = "block";
  
  document.getElementById("tripSourceName").textContent = activeTrip.sourceTemplateName;
  
  const itemsList = document.getElementById("tripItemsList");
  itemsList.innerHTML = "";
  
  if (activeTrip.items.length === 0) {
    itemsList.innerHTML = "<li class='empty-message'>No items in this trip</li>";
    return;
  }
  
  activeTrip.items.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = item.completed ? "completed" : "";
    li.innerHTML = `<span>${item.name}</span>`;
    li.addEventListener("click", () => toggleItemInTrip(index));
    itemsList.appendChild(li);
  });
}

function switchView(viewName) {
  // Hide all views
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  
  // Deactivate all tabs
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
  
  // Show the selected view and activate the tab
  if (viewName === "templates") {
    document.getElementById("templatesView").classList.add("active");
    document.getElementById("templatesTab").classList.add("active");
  } else if (viewName === "templateDetail") {
    document.getElementById("templateDetailView").classList.add("active");
  } else if (viewName === "trip") {
    document.getElementById("tripView").classList.add("active");
    document.getElementById("tripTab").classList.add("active");
  }
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();
  renderTemplatesList();
  renderTrip();
  
  // Tab navigation
  document.getElementById("templatesTab").addEventListener("click", () => {
    switchView("templates");
    renderTemplatesList();
  });
  
  document.getElementById("tripTab").addEventListener("click", () => {
    switchView("trip");
  });
  
  // Templates view
  document.getElementById("createTemplateButton").addEventListener("click", () => {
    const name = document.getElementById("templateNameInput").value;
    createTemplate(name);
  });
  
  document.getElementById("templateNameInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const name = document.getElementById("templateNameInput").value;
      createTemplate(name);
    }
  });
  
  // Template detail delegation
  document.getElementById("templatesList").addEventListener("click", (e) => {
    if (e.target.classList.contains("template-view-btn")) {
      const templateId = e.target.dataset.id;
      renderTemplateDetail(templateId);
      switchView("templateDetail");
    }
  });
  
  document.getElementById("backFromDetailButton").addEventListener("click", () => {
    switchView("templates");
    renderTemplatesList();
  });
  
  document.getElementById("addItemToTemplateButton").addEventListener("click", () => {
    const templateId = document.getElementById("startTripButton").dataset.templateId;
    const itemName = document.getElementById("templateItemInput").value;
    addItemToTemplate(templateId, itemName);
  });
  
  document.getElementById("templateItemInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const templateId = document.getElementById("startTripButton").dataset.templateId;
      const itemName = document.getElementById("templateItemInput").value;
      addItemToTemplate(templateId, itemName);
    }
  });
  
  document.getElementById("templateItemsList").addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const templateId = e.target.dataset.templateId;
      const index = parseInt(e.target.dataset.index);
      removeItemFromTemplate(templateId, index);
    }
  });
  
  document.getElementById("startTripButton").addEventListener("click", () => {
    const templateId = document.getElementById("startTripButton").dataset.templateId;
    startTrip(templateId);
  });
  
  document.getElementById("deleteTemplateButton").addEventListener("click", () => {
    const templateId = document.getElementById("deleteTemplateButton").dataset.templateId;
    if (confirm("Are you sure you want to delete this template?")) {
      deleteTemplate(templateId);
    }
  });
  
  // Trip view
  document.getElementById("addItemToTripButton").addEventListener("click", () => {
    const itemName = document.getElementById("tripItemInput").value;
    addItemToTrip(itemName);
  });
  
  document.getElementById("tripItemInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const itemName = document.getElementById("tripItemInput").value;
      addItemToTrip(itemName);
    }
  });
  
  document.getElementById("clearCompletedButton").addEventListener("click", () => {
    clearCompletedInTrip();
  });
  
  document.getElementById("endTripButton").addEventListener("click", () => {
    if (confirm("End this shopping trip? You can start a new one anytime.")) {
      endTrip();
    }
  });
});

