<template>
    <Card>
        <Table border :content="self" :columns="columns" :data="data" no-data-text="empty" no-filtered-data-text="nothing found"></Table>
    </Card>
</template>
<script>
    export default {
        data () {
            return {
                self: this,
                columns: [
                    {
                        title: 'Owners Name',
                        key: 'name',
                        sortable: true,
                        render (row, column, index) {
                            return `<Icon type="paper-outline"></Icon> <strong>${row.name}</strong>`;
                        },
                        filters: [
                            {
                                label: 'filter1',
                                value: 1
                            },
                            {
                                label: 'filter2',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.show > 4000;
                            } else if (value === 2) {
                                return row.show < 4000;
                            }
                        }
                    },
                    {
                        title: 'Vehicle',
                        key: 'vehicle',
                        sortable: true,
                    },
                    {
                        title: 'Total',
                        key: 'total',
                        sortable: true,
                    },
                    {
                        title: 'Actions',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        sortable: true,
                        render (row, column, index) {
                            return `<i-button type="primary" size="small" @click.native="show(${index})">Detail</i-button> <i-button type="error" size="small" @click.native="remove(${index})">Remove</i-button>`;
                        }
                    }
                ],
                data: [
                    {
                        name: 'Test Naam',
                        vehicle: 'Toyota Prius',
                        total: '€ 1234,54'
                    },{
                        name: 'Test Naam',
                        vehicle: 'Toyota Prius',
                        total: '€ 1234,54'
                    },{
                        name: 'Test Naam',
                        vehicle: 'Toyota Prius',
                        total: '€ 1234,54'
                    },{
                        name: 'Test Naam',
                        vehicle: 'Toyota Prius',
                        total: '€ 1234,54'
                    },{
                        name: 'Test Naam',
                        vehicle: 'Toyota Prius',
                        total: '€ 1234,54'
                    },{
                        name: 'Test Naam',
                        vehicle: 'Toyota Prius',
                        total: '€ 1234,54'
                    },{
                        name: 'Test Naam',
                        vehicle: 'Toyota Prius',
                        total: '€ 1234,54'
                    },{
                        name: 'Test Naam',
                        vehicle: 'Toyota Prius',
                        total: '€ 1234,54'
                    },{
                        name: 'Test Naam',
                        vehicle: 'Toyota Prius',
                        total: '€ 1234,54'
                    },{
                        name: 'Test Naam',
                        vehicle: 'Toyota Prius',
                        total: '€ 1234,54'
                    },{
                        name: 'Test Naam',
                        vehicle: 'Toyota Prius',
                        total: '€ 1234,54'
                    },{
                        name: 'Test Naam',
                        vehicle: 'Toyota Prius',
                        total: '€ 1234,54'
                    },{
                        name: 'Test Naam',
                        vehicle: 'Toyota Prius',
                        total: '€ 1234,54'
                    },
                ]
            }
        },
        methods: {
            show (index) {
            },
            remove (index) {
                this.data.splice(index, 1);
            }
        },
        mounted () {
            setTimeout(() => {
//                this.data.splice(2, 1);
            }, 3000)
        }
    }
</script>
