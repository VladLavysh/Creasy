import { defineStore } from 'pinia'
import { ToolConfig } from '../types/index'

export const useCanvasStore = defineStore('tools', {
  state: () => ({
    tools: [] as ToolConfig[],
    selectedTool: null as ToolConfig | null,
    isAddingAllowed: false as Boolean
  }),
  getters: {
    //getTool(): ToolConfig | null {
    //  return this.selectedTool
    //}
    //selectedTool: (state) => state.selectedTool
  },
  actions: {
    addNewTool(newTool: ToolConfig) {
      this.tools.push(newTool)
    },
    setSelectedTool(toolName: string | null) {
      if (!toolName) {
        this.selectedTool = null
        return
      }
      if (this.selectedTool?.name === toolName) {
        return
      }

      this.selectedTool = this.tools.find(el => el.name === toolName) || null
    },
    changeAddingStatus(isAllowed: Boolean) {
      this.isAddingAllowed = isAllowed
    }
  },
})