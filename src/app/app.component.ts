import { Component, OnInit } from '@angular/core';
import { TreeService } from './tree.service';
import { TreeNode } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  statsTree: TreeNode[];
  selectedItem: TreeNode;
  highlightedItems: TreeNode[] = [];

  constructor(private treeService: TreeService) {}

  ngOnInit() {
    this.statsTree = this.treeService.getTreeStructure();
  }

  nodeSelect(event) {
    this.highlightedItems = [];
    if (!event.node.children)
      this.selectDescendants(event.node);
  }

  selectDescendants(node) {
    if (node.parent) {
      this.highlightedItems.push(node.parent);
      this.selectDescendants(node.parent);
    }
  }

  nodeUnselect(event) {
    this.highlightedItems = [];
  }

  isSelected(node) {
    return this.selectedItem === node;
  }

  isHighlighted(node) {
    return this.highlightedItems.includes(node);
  }
}
