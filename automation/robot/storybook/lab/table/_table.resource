*** Setting ***
Resource     ../_keywords.resource


*** Keywords ***
open table sample
    [Arguments]    ${dir}    ${sample}
    go to                            ${dir}table-hooks--${sample}
    Wait Until Element Is Enabled    ${table}


*** Variables ***
${bulkAction}             css:.HvBulkActions-root
${cells}                  css:[role=table] [role=row] [role=cell]
${checkBox}               [type="checkbox"]
${column}                 ${rows}>div>div:nth-child
${header}                 ${headers}:nth-child
${headers}                css:[role=columnheader]
${nav_first_page}         css:button[aria-label='First Page']
${nav_input}              css:input[aria-label='Current page']
${nav_last_page}          css:button[aria-label='Last Page']
${nav_next_page}          css:button[aria-label='Next Page']
${nav_previous_page}      css:button[aria-label='Previous Page']
${row}                    ${rows}:nth-child
${rows_per_page}          css:div[class*='HvPagination-pageSizeOptionsSelect']
${rows_populated}         css:tbody[role=rowgroup]>[role=row][aria-rowindex]
${rows_selected}          css:[class*='HvTableRow-selected']
${rows}                   css:tbody[role=rowgroup]>[role=row]
${table}                  css:[role=table]
