public class casesController {
     @AuraEnabled(cacheable=true)
    public static list<Case> getCases(string strAccountName){
        strAccountName='%'+strAccountName+'%';
        list<Case> CaseList;
        if([select id,Type, AccountId, ContactId,Account.Name from Case  where Account.Name like :strAccountName  ].size()>0){
            CaseList= [select id,Type, AccountId, ContactId,Account.Name from Case  where Account.Name like :strAccountName  ];
            CaseList=updatedList(CaseList);
        }
        return CaseList  ;
    }
    
    public  static list<Case> updatedList(list<Case> CaseList){
        for( Case record:CaseList){
            record.Account.Name=record.Account.Name+'*';
        }
        return CaseList;
    }

}