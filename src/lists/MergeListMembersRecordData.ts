export class MergeListMembersRecordData {

  fieldNames: string[];
  records: string[][];

  constructor(fieldNames: string[], records: string[][]) {
    this.fieldNames = fieldNames;
    this.records = records;
  }
}
