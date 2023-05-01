import { ITask } from "./ITask";
import React from "react";

export interface Props {
    filter: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
