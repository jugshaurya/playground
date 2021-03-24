import React from "react";
import AvatarPlayground from "../content/Avatar/avatar.playground";
import Button from "../content/Button";
import Badge from "../content/Badge";
import Tile from "../content/Tile";
import Card from "../content/Card";
import ToolTip from "../content/ToolTip";
import Text from "../content/Text";
import SocialIcon from "../content/SocialIcon";
import Slider from "../content/Slider";
import SearchBar from "../content/SearchBar";
import Rating from "../content/Rating";
import AirbnbRating from "../content/AirbnbRating";
import Pricing from "../content/Pricing";
import Overlay from "../content/Overlay";
import ListItem from "../content/ListItem";
import Input from "../content/Input";
import Image from "../content/Image";
import Icon from "../content/Icon";
import Header from "../content/Header";
import CheckBox from "../content/CheckBox";
import BottomSheet from "../content/BottomSheet";
import ButtonGroup from "../content/ButtonGroup";
import Divider from "../content/Divider";

import { importMDX } from "mdx.macro";

const playgroundComponents = [
  {
    name: "Avatar",
    path: "/avatar",
    ContentPlayground: AvatarPlayground,
    ContentMDX: lazy(() => importMDX("../content/Props/avatar.md")),
  },
  {
    name: "Badge",
    component: Badge,
    path: "/badge",
  },
  {
    name: "BottomSheet",
    component: BottomSheet,
    path: "/bottom-sheet",
  },
  {
    name: "Button",
    component: Button,
    path: "/button",
  },
  {
    name: "ButtonGroup",
    component: ButtonGroup,
    path: "/button-group",
  },
  {
    name: "Card",
    component: Card,
    path: "/card",
  },
  {
    name: "CheckBox",
    component: CheckBox,
    path: "/checkbox",
  },

  {
    name: "Divider",
    component: Divider,
    path: "/divider",
  },

  {
    name: "Header",
    component: Header,
    path: "/header",
  },

  {
    name: "Icon",
    component: Icon,
    path: "/icon",
  },

  {
    name: "Image",
    component: Image,
    path: "/image",
  },

  {
    name: "Input",
    component: Input,
    path: "/input",
  },

  {
    name: "ListItem",
    component: ListItem,
    path: "/list-item",
  },

  {
    name: "Overlay",
    component: Overlay,
    path: "/overlay",
  },

  {
    name: "Pricing",
    component: Pricing,
    path: "/pricing",
  },

  {
    name: "Rating",
    component: Rating,
    path: "/rating",
  },
  {
    name: "Rating (Airbnb)",
    component: AirbnbRating,
    path: "/airbnb-rating",
  },

  {
    name: "SearchBar",
    component: SearchBar,
    path: "/search-bar",
  },

  {
    name: "Slider",
    component: Slider,
    path: "/slider",
  },
  {
    name: "SocialIcon",
    component: SocialIcon,
    path: "/social-icon",
  },
  {
    name: "Text",
    component: Text,
    path: "/text",
  },
  {
    name: "Tile",
    component: Tile,
    path: "/tile",
  },
  {
    name: "ToolTip",
    component: ToolTip,
    path: "/tooltip",
  },
];

export default playgroundComponents;
