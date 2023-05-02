import { ITask } from "./ITask";
import React from "react";

export interface IFilterProps {
    filter: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;

  }
