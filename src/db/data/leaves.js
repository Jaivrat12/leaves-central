const leaves = {
    default: [
        {
            id: 'CL',
            type: 'Casual Leave',
            max: 30,
            taken: 0
        },
        {
            id: 'OL',
            type: 'Optional Leave',
            max: 2,
            taken: 0
        },
        {
            id: 'VL',
            type: 'Vacation Leave',
            max: 30,
            taken: 0
        },
        {
            id: 'EL',
            type: 'Earned Leave',
            max: 15,
            taken: 0
        },
        {
            id: 'HPL',
            type: 'Half-pay Leave',
            max: 15,
            taken: 0
        },
        {
            id: 'AL',
            type: 'Academic Leave',
            max: Infinity,
            taken: 0
        },
        {
            id: 'SPL',
            type: 'Comp. Off/Special Leave',
            max: 0,
            taken: 0
        },
        {
            id: 'OD',
            type: 'On-duty Leave',
            max: Infinity,
            taken: 0
        },
        {
            id: 'LWP',
            type: 'Leave w/o Pay',
            max: Infinity,
            taken: 0
        },
    ]
};

export default leaves;