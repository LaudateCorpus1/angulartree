import { Injectable } from '@angular/core';

@Injectable()
export class TreeService {

  constructor() { }

  getTreeStructure() {
    return [{
        label: 'System',
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        expanded: true,
        children: [{
            "label": "Core",
            "data": "Documents Folder",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            expanded: true,
            "children": [{
                "label": "Камеры",
                "data": "Work Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                expanded: true,
                "children": [{
                    "label": "Офис 1",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    expanded: true,
                    "children": [
                        {
                            "label": "Общий вид"
                        },
                        {
                            "label": "Оборудование",
                            "expandedIcon": "fa-folder-open",
                            "collapsedIcon": "fa-folder",
                            "children": [
                                {
                                    "label": "Cam 1 (Сервер)"
                                },
                                {
                                    "label": "Cam 2"
                                }
                            ]
                        }
                    ]
                },{
                    "label": "Этаж",
                },{
                    "label": "Лестница",
                }, {
                    "label": "Офис 2",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        {
                            "label": "Общий вид"
                        }
                    ]
                }]
            }]
        },
        {
            "label": "Core 2",
            "data": "Documents Folder",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": [{
                "label": "Датчики",
                "data": "Work Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                expanded: true,
                "children": [{
                    "label": "Офис 1",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    expanded: true,
                    "children": [
                        {
                            "label": "Датчик дыма 1"
                        },
                        {
                            "label": "Датчик дыма 2"
                        }
                    ]
                },
                {
                    "label": "Офис 2",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        {
                            "label": "Датчик дыма 1"
                        }
                    ]
                }]
            }]
        }
        ]
    }];
  }
}
