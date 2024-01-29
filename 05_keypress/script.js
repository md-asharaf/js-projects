const project = document.querySelector(".project");
window.addEventListener("keypress", (e) => {
  project.innerHTML =`<div class="color">
  <table>
    <tr>
      <td>key</td>
      <td>keyCode</td>
      <td>code</td>
    </tr>
    <tr>
      <td>${e.key===' '?'space':e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
</div>`
});
