---
to: src/component/<%= name %>/<%= h.changeCase.lcFirst(name) %>.stories.js
---
import React from "react";
import <%= name %> from "./index";

export default {
    title: "<%= name %>",
    component: <%= name %>
}

export const Default = () => {
    return <<%= name %>>默认</<%= name %>>
}

