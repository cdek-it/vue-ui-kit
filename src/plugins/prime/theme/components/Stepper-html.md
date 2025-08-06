https://primevue.org/stepper/#horizontal
<div class="p-stepper p-component basis-[50rem]" role="tablist" data-pc-name="stepper" pc1_17="" data-pc-section="root"><!----><div class="p-steplist" data-pc-name="steplist" pc1_18="" data-pc-section="root"><div class="p-step p-step-active" aria-current="step" role="presentation" data-p-active="true" data-p-disabled="false" data-p="active" data-pc-name="step" pc1_19="" data-pc-section="root"><button id="pv_id_1_17_step_1" class="p-step-header" role="tab" type="button" aria-controls="pv_id_1_17_steppanel_1" data-p="active" data-pc-section="header"><span class="p-step-number" data-p="active" data-pc-section="number">1</span><span class="p-step-title" data-p="active" data-pc-section="title">Header I</span></button><span class="p-stepper-separator" data-pc-section="separator" data-p="active"></span></div><div class="p-step" role="presentation" data-p-active="false" data-p-disabled="false" data-p="" data-pc-name="step" pc1_20="" data-pc-section="root"><button id="pv_id_1_17_step_2" class="p-step-header" role="tab" type="button" aria-controls="pv_id_1_17_steppanel_2" data-p="" data-pc-section="header"><span class="p-step-number" data-p="" data-pc-section="number">2</span><span class="p-step-title" data-p="" data-pc-section="title">Header II</span></button><span class="p-stepper-separator" data-pc-section="separator" data-p=""></span></div><div class="p-step" role="presentation" data-p-active="false" data-p-disabled="false" data-p="" data-pc-name="step" pc1_21="" data-pc-section="root"><button id="pv_id_1_17_step_3" class="p-step-header" role="tab" type="button" aria-controls="pv_id_1_17_steppanel_3" data-p="" data-pc-section="header"><span class="p-step-number" data-p="" data-pc-section="number">3</span><span class="p-step-title" data-p="" data-pc-section="title">Header III</span></button><!----></div></div><div class="p-steppanels" data-pc-name="steppanels" pc1_22="" data-pc-section="root"><div id="pv_id_1_17_steppanel_1" class="p-steppanel" role="tabpanel" aria-controls="pv_id_1_17_step_1" data-pc-name="steppanel" pc1_23="" data-pc-section="root"><div class="flex flex-col h-48"><div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content I</div></div><div class="flex pt-6 justify-end"><button class="p-button p-component" data-p="" type="button" aria-label="Next" data-pc-name="button" data-p-disabled="false" pc1_24="" data-pc-section="root"><span class="p-button-icon p-button-icon-right pi pi-arrow-right" data-p="right" data-pc-section="icon"></span><span class="p-button-label" data-pc-section="label" data-p="">Next</span><!----></button></div></div><div id="pv_id_1_17_steppanel_2" class="p-steppanel" role="tabpanel" aria-controls="pv_id_1_17_step_2" data-pc-name="steppanel" pc1_25="" data-pc-section="root" style="display: none;"><div class="flex flex-col h-48"><div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div></div><div class="flex pt-6 justify-between"><button class="p-button p-component p-button-secondary" data-p="" type="button" aria-label="Back" data-pc-name="button" data-p-disabled="false" data-p-severity="secondary" pc1_26="" data-pc-section="root"><span class="p-button-icon p-button-icon-left pi pi-arrow-left" data-p="left" data-pc-section="icon"></span><span class="p-button-label" data-pc-section="label" data-p="">Back</span><!----></button><button class="p-button p-component" data-p="" type="button" aria-label="Next" data-pc-name="button" data-p-disabled="false" pc1_27="" data-pc-section="root"><span class="p-button-icon p-button-icon-right pi pi-arrow-right" data-p="right" data-pc-section="icon"></span><span class="p-button-label" data-pc-section="label" data-p="">Next</span><!----></button></div></div><div id="pv_id_1_17_steppanel_3" class="p-steppanel" role="tabpanel" aria-controls="pv_id_1_17_step_3" data-pc-name="steppanel" pc1_28="" data-pc-section="root" style="display: none;"><div class="flex flex-col h-48"><div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div></div><div class="pt-6"><button class="p-button p-component p-button-secondary" data-p="" type="button" aria-label="Back" data-pc-name="button" data-p-disabled="false" data-p-severity="secondary" pc1_29="" data-pc-section="root"><span class="p-button-icon p-button-icon-left pi pi-arrow-left" data-p="left" data-pc-section="icon"></span><span class="p-button-label" data-pc-section="label" data-p="">Back</span><!----></button></div></div></div><!----></div>

<template>
    <div class="card flex justify-center">
        <Stepper value="1" class="basis-[50rem]">
            <StepList>
                <Step value="1">Header I</Step>
                <Step value="2">Header II</Step>
                <Step value="3">Header III</Step>
            </StepList>
            <StepPanels>
                <StepPanel v-slot="{ activateCallback }" value="1">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content I</div>
                    </div>
                    <div class="flex pt-6 justify-end">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="2">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('1')" />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('3')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="3">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
                    </div>
                    <div class="pt-6">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
            </StepPanels>
        </Stepper>
    </div>
</template>


https://primevue.org/stepper/#vertical
<div class="p-stepper p-component" role="tablist" data-pc-name="stepper" pc1_30="" data-pc-section="root"><!----><div class="p-stepitem p-stepitem-active" data-p-active="true" data-pc-name="stepitem" pc1_31="" data-pc-section="root"><div class="p-step p-step-active" aria-current="step" role="presentation" data-p-active="true" data-p-disabled="false" data-p="active vertical" data-pc-name="step" pc1_32="" data-pc-section="root"><button id="pv_id_1_30_step_1" class="p-step-header" role="tab" type="button" aria-controls="pv_id_1_30_steppanel_1" data-p="active vertical" data-pc-section="header"><span class="p-step-number" data-p="active vertical" data-pc-section="number">1</span><span class="p-step-title" data-p="active vertical" data-pc-section="title">Header I</span></button><!----></div><div id="pv_id_1_30_steppanel_1" class="p-steppanel p-steppanel-active" role="tabpanel" aria-controls="pv_id_1_30_step_1" data-p="vertical" data-pc-name="steppanel" pc1_33="" data-pc-section="root"><span class="p-stepper-separator" data-pc-section="separator" data-p="vertical"></span><div class="p-steppanel-content" data-p="vertical" data-pc-section="content"><div class="flex flex-col h-48"><div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content I</div></div><div class="py-6"><button class="p-button p-component" data-p="" type="button" aria-label="Next" data-pc-name="button" data-p-disabled="false" pc1_34="" data-pc-section="root"><!----><span class="p-button-label" data-pc-section="label" data-p="">Next</span><!----></button></div></div></div></div><div class="p-stepitem" data-p-active="false" data-pc-name="stepitem" pc1_35="" data-pc-section="root"><div class="p-step" role="presentation" data-p-active="false" data-p-disabled="false" data-p="vertical" data-pc-name="step" pc1_36="" data-pc-section="root"><button id="pv_id_1_30_step_2" class="p-step-header" role="tab" type="button" aria-controls="pv_id_1_30_steppanel_2" data-p="vertical" data-pc-section="header"><span class="p-step-number" data-p="vertical" data-pc-section="number">2</span><span class="p-step-title" data-p="vertical" data-pc-section="title">Header II</span></button><!----></div><div id="pv_id_1_30_steppanel_2" class="p-steppanel" role="tabpanel" aria-controls="pv_id_1_30_step_2" data-p="vertical" data-pc-name="steppanel" pc1_37="" data-pc-section="root" style="display: none;"><span class="p-stepper-separator" data-pc-section="separator" data-p="vertical"></span><div class="p-steppanel-content" data-p="vertical" data-pc-section="content"><div class="flex flex-col h-48"><div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div></div><div class="flex py-6 gap-2"><button class="p-button p-component p-button-secondary" data-p="" type="button" aria-label="Back" data-pc-name="button" data-p-disabled="false" data-p-severity="secondary" pc1_38="" data-pc-section="root"><!----><span class="p-button-label" data-pc-section="label" data-p="">Back</span><!----></button><button class="p-button p-component" data-p="" type="button" aria-label="Next" data-pc-name="button" data-p-disabled="false" pc1_39="" data-pc-section="root"><!----><span class="p-button-label" data-pc-section="label" data-p="">Next</span><!----></button></div></div></div></div><div class="p-stepitem" data-p-active="false" data-pc-name="stepitem" pc1_40="" data-pc-section="root"><div class="p-step" role="presentation" data-p-active="false" data-p-disabled="false" data-p="vertical" data-pc-name="step" pc1_41="" data-pc-section="root"><button id="pv_id_1_30_step_3" class="p-step-header" role="tab" type="button" aria-controls="pv_id_1_30_steppanel_3" data-p="vertical" data-pc-section="header"><span class="p-step-number" data-p="vertical" data-pc-section="number">3</span><span class="p-step-title" data-p="vertical" data-pc-section="title">Header III</span></button><!----></div><div id="pv_id_1_30_steppanel_3" class="p-steppanel" role="tabpanel" aria-controls="pv_id_1_30_step_3" data-p="vertical" data-pc-name="steppanel" pc1_42="" data-pc-section="root" style="display: none;"><!----><div class="p-steppanel-content" data-p="vertical" data-pc-section="content"><div class="flex flex-col h-48"><div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div></div><div class="py-6"><button class="p-button p-component p-button-secondary" data-p="" type="button" aria-label="Back" data-pc-name="button" data-p-disabled="false" data-p-severity="secondary" pc1_43="" data-pc-section="root"><!----><span class="p-button-label" data-pc-section="label" data-p="">Back</span><!----></button></div></div></div></div><!----></div>

<template>
    <div class="card">
        <Stepper value="1">
            <StepItem value="1">
                <Step>Header I</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content I</div>
                    </div>
                    <div class="py-6">
                        <Button label="Next" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
            </StepItem>
            <StepItem value="2">
                <Step>Header II</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex py-6 gap-2">
                        <Button label="Back" severity="secondary" @click="activateCallback('1')" />
                        <Button label="Next" @click="activateCallback('3')" />
                    </div>
                </StepPanel>
            </StepItem>
            <StepItem value="3">
                <Step>Header III</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
                    </div>
                    <div class="py-6">
                        <Button label="Back" severity="secondary" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
            </StepItem>
        </Stepper>
    </div>
</template>

https://primevue.org/stepper/#stepsonly
<div class="p-steplist" data-pc-name="steplist" pc1_58="" data-pc-section="root"><div class="p-step" role="presentation" data-p-active="false" data-p-disabled="false" data-p="completed" data-pc-name="step" pc1_59="" data-pc-section="root"><button id="pv_id_1_57_step_1" class="p-step-header" role="tab" type="button" aria-controls="pv_id_1_57_steppanel_1" data-p="completed" data-pc-section="header"><span class="p-step-number" data-p="completed" data-pc-section="number">1</span><span class="p-step-title" data-p="completed" data-pc-section="title">Design</span></button><span class="p-stepper-separator" data-pc-section="separator" data-p="completed"></span></div><div class="p-step" role="presentation" data-p-active="false" data-p-disabled="false" data-p="completed" data-pc-name="step" pc1_60="" data-pc-section="root"><button id="pv_id_1_57_step_2" class="p-step-header" role="tab" type="button" aria-controls="pv_id_1_57_steppanel_2" data-p="completed" data-pc-section="header"><span class="p-step-number" data-p="completed" data-pc-section="number">2</span><span class="p-step-title" data-p="completed" data-pc-section="title">Development</span></button><span class="p-stepper-separator" data-pc-section="separator" data-p="completed"></span></div><div class="p-step p-step-active" role="presentation" data-p-active="true" data-p-disabled="false" data-p="active" data-pc-name="step" pc1_61="" data-pc-section="root" aria-current="step"><button id="pv_id_1_57_step_3" class="p-step-header" role="tab" type="button" aria-controls="pv_id_1_57_steppanel_3" data-p="active" data-pc-section="header"><span class="p-step-number" data-p="active" data-pc-section="number">3</span><span class="p-step-title" data-p="active" data-pc-section="title">QA</span></button><!----></div></div>

<template>
    <div class="card flex justify-center">
        <Stepper value="1" class="basis-[50rem]">
            <StepList>
                <Step value="1">Design</Step>
                <Step value="2">Development</Step>
                <Step value="3">QA</Step>
            </StepList>
        </Stepper>
    </div>
</template>

