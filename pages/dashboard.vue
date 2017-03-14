<template>
    <div>
        <Collapse v-model="selectedCascade" accordion>
            <Panel name="1">
                Overdue invoices
                <p slot="content">
                  <overdueInvoices></overdueInvoices>
                </p>
            </Panel>
            <Panel name="2">
                Last rate updates
                <p slot="content">
                </p>
            </Panel>
            <Panel name="3">
                Stolen Cars
                <p slot="content">

                </p>
            </Panel>
        </Collapse>
    </div>
</template>
<script>
import overdueInvoices from './dashboard/overdue-invoices.vue'
    export default {
        components: {overdueInvoices},
        props: {},
        data () {
            return {
                selectedCascade: '1'
            };
        },
        computed: {},
        methods: {}
    };
</script>