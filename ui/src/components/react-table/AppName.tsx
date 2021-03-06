import * as React from "react";
import {Link} from "react-router-dom";
import {CellInfo} from "react-table";

export const AppName: React.FunctionComponent<CellInfo> = ({ value, original }: CellInfo) => (
    <Link to={`/applications/id/${original.id}`}>
        <span>{value ? value : original.attributes.display_name}</span>
    </Link>
);
