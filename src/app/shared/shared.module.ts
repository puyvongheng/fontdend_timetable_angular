import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// ✅ Ng-Zorro Modules
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzHashCodeModule } from 'ng-zorro-antd/hash-code';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzProgressModule } from 'ng-zorro-antd/progress';

// ✅ PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { CardModule } from 'primeng/card';
import { BlockUIModule } from 'primeng/blockui';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzWaterMarkModule } from 'ng-zorro-antd/water-mark';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { TableModule } from 'primeng/table';
import { InputIconModule } from 'primeng/inputicon';

import { IconFieldModule } from 'primeng/iconfield';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzBadgeModule } from 'ng-zorro-antd/badge';




@NgModule({






  declarations: [],
  imports: [
    NzImageModule,
    NzBadgeModule,
    IconFieldModule,
    InputIconModule,
    TableModule,
    SelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    // ✅ Ng-Zorro
    NzSwitchModule  ,    
    NzCollapseModule,
    NzWaterMarkModule,
    NzCheckboxModule,
    NzTabsModule,
    NzQRCodeModule,
    NzIconModule,
    NzSpinModule,
    NzSkeletonModule,
    NzTagModule,
    NzButtonModule,
    NzPopoverModule,
    NzInputNumberModule,
    NzInputModule,
    NzResultModule,
    NzToolTipModule,
    NzModalModule,
    NzRadioModule,
    NzSelectModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzAvatarModule,
    NzMenuModule,
    NzPopconfirmModule,
    NzHashCodeModule,
    NzPaginationModule,
    NzFloatButtonModule,
    NzSwitchModule,
    NzDropDownModule,
    NzTableModule,
    NzAlertModule,
    NzSpaceModule,
    NzCascaderModule,
    NzFormModule,
    NzDatePickerModule,
    NzProgressModule,

    // ✅ PrimeNG
    CardModule,
    InputTextModule,
    PasswordModule,
    FloatLabelModule,
    MegaMenuModule,
    MenubarModule,
    FieldsetModule,
    SelectButtonModule,
    ButtonModule,
    OrganizationChartModule,
    BlockUIModule,
    AvatarModule
  ],
  exports: [
    NzImageModule,
    NzBadgeModule,
    IconFieldModule,
    InputIconModule,
    TableModule,
    SelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    // ✅ Ng-Zorro
    NzSwitchModule,
    NzCollapseModule,
    NzWaterMarkModule,
    NzCheckboxModule,
    NzTabsModule,
    NzQRCodeModule,
    NzIconModule,
    NzSpinModule,
    NzSkeletonModule,
    NzTagModule,
    NzButtonModule,
    NzPopoverModule,
    NzInputNumberModule,
    NzInputModule,
    NzResultModule,
    NzToolTipModule,
    NzModalModule,
    NzRadioModule,
    NzSelectModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzAvatarModule,
    NzMenuModule,
    NzPopconfirmModule,
    NzHashCodeModule,
    NzPaginationModule,
    NzFloatButtonModule,
    NzSwitchModule,
    NzDropDownModule,
    NzTableModule,
    NzAlertModule,
    NzSpaceModule,
    NzCascaderModule,
    NzFormModule,
    NzDatePickerModule,
    NzProgressModule,

    // ✅ PrimeNG
    CardModule,
    InputTextModule,
    PasswordModule,
    FloatLabelModule,
    MegaMenuModule,
    MenubarModule,
    FieldsetModule,
    SelectButtonModule,
    ButtonModule,
    OrganizationChartModule,
    BlockUIModule,
    AvatarModule
  ]
})
export class SharedModule { }
