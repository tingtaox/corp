import * as React from "react";
import * as ReactDOM from "react-dom";
import './styles/index.scss';

import { SearchHome } from './pages/SearchHome';
import { ZIndex } from './pages/ZIndex';
import { PhoneTool } from './pages/PhoneTool';

ReactDOM.render(
    <PhoneTool />,
    document.querySelector('body')
);