export type Menu = {
    isSuccess: boolean,
    message: string,
     data : {
         top : [
            {
                 name : string,
                 link : string
            }
        ],
         catalog : [
            {
                 name : string,
                 link : string,
                 icon : string,
                 items : [
                    {
                         name : string,
                         link : string,
                         icon : string
                    }
                ]
            }
        ],
         footer : [
            {
                 name : string,
                 link : string
            }
        ]
    }
}