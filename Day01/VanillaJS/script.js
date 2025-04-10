const content = [
    [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem"
    ],
    [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering"
    ],
    [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)"
    ]
  ];

  const btnWhyReact = document.getElementById("btn-why-react");
  const btnReactFeatures = document.getElementById("btn-core-features");
  const btnResources = document.getElementById("btn-resources");
  const tabContent = document.getElementById("tab-content");

  function displayContent(items) {
    let listContent = "";
    for(const item of items) {
      listContent += `<li>${item}</li>`;
    }
    const list = document.createElement("ul");
    tabContent.innerHTML = ""; // Clear previous content
    list.innerHTML = listContent;
    tabContent.appendChild(list);
  }

  function highlightButton(button) {
    const buttons = [btnWhyReact, btnReactFeatures, btnResources];
    buttons.forEach(btn => {
      if (btn === button) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  function handleClick(event) {
    const target = event.target;
    highlightButton(target);
    if (target.id === "btn-why-react") {
      displayContent(content[0]);
    } else if (target.id === "btn-core-features") {
      displayContent(content[1]);
    } else {
      displayContent(content[2]);
    }
  }

  displayContent(content[0]); // Display initial content
  btnWhyReact.addEventListener("click", handleClick);
  btnReactFeatures.addEventListener("click", handleClick);
  btnResources.addEventListener("click", handleClick);