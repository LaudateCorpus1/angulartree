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
  selectedItems: TreeNode[];

  constructor(private treeService: TreeService) {}

  ngOnInit() {
    this.statsTree = this.treeService.getTreeStructure();
  }

  nodeSelect(event) {
    if (!event.node.children)
      this.selectedItems.push(event.node.parent);
  }

  isSelected(node) {
    if (!this.selectedItems) return false;
    return this.selectedItems.includes(node);
  }
}
