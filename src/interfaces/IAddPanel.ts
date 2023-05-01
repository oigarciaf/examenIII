import React from "react";
import { ITask } from "./ITask";
export interface IAddPanel {
  title: string;
  tasks: ITask[];
  teams: string[];
  changeStatus: (id: number, status: string) => void;
  deleteTask: (id: number) => void;
  addTask: (task: ITask) => void;
  removePanel: (title: string) => void;
}

export interface AddPanelProps {
  addPanel: (title: string) => void;
  panels?: string[]; // Aquí se pasa el array de paneles
}
