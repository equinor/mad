---
"@equinor/mad-dfw": minor
---

-   Introduced `tagPlantId` field on `WorkOrder` type.
-   Expanded the allowed props on the `WorkOrderCell` to accept all non-child view props in addition
    to its fundamental props.

**Breaking changes:**

-   Moved all work order related data into the `workOrder` prop of the cell
-   Renamed `requiredEnd` to `requiredEndDate`
-   Renamed `workCenter` to `workCenterId`
-   Renamed `functionalLocation` to `tagId`
-   Renamed `basicFinishDate` to `basicEndDate`
-   Renamed `equipment` to `equipmentId`
-   Renamed `activeStatus` to `activeStatusIds`
-   Removed the `overwriteLabel` prop on `WorkOrderCellProps`
