import { MergeTriggerEmailRecordData } from './MergeTriggerEmailRecordData';
import { FIELD_NAMES } from './../Constants';

export class MergeTriggerRecordData  {

  mergeTriggerRecords;
  fieldNames;

  constructor(mergeTriggerEmailRecordData: Set<MergeTriggerEmailRecordData>, fieldNames: string[] = FIELD_NAMES) {
    this.mergeTriggerRecords = Array.from(mergeTriggerEmailRecordData);
    this.fieldNames = fieldNames;
  }
}
