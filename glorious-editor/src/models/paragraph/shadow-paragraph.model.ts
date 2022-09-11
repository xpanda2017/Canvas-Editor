import { IShadowParagraphDto } from 'src/interfaces/shadow-paragraph-dto';
import { getObject, getArrayOfModels } from 'src/utils/primitives.utils';
import { TextRun } from '../text-run/text-run.model';


export class ShadowParagraph implements IShadowParagraphDto {
  public runs: TextRun[];

  constructor(o?: Partial<ShadowParagraph>) {
    const obj: Partial<ShadowParagraph> = getObject(o);
    this.runs = getArrayOfModels(TextRun, obj.runs);
  };
}
