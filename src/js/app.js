// TODO: write code here

import { Collapse } from "../components/collapse/collapse";

const message = {
  btn: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet aspernatur aut beatae cumque deserunt eveniet fuga id illo incidunt ipsa ipsam itaque molestiae necessitatibus quaerat sapiente sint sunt, veritatis? ",
};

const collapse = new Collapse(".collapse-btn");
collapse.createCollapse(message["btn"]);
