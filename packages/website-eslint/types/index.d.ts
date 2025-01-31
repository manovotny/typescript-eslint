import type { TSESLint, TSESTree } from '@typescript-eslint/experimental-utils';
import type { ParserOptions } from '@typescript-eslint/types';
import type { SourceFile } from 'typescript';

export type LintMessage = TSESLint.Linter.LintMessage;
export type RuleFix = TSESLint.RuleFix;
export type RulesRecord = TSESLint.Linter.RulesRecord;
export type RuleEntry = TSESLint.Linter.RuleEntry;

export interface WebLinter {
  ruleNames: { name: string; description?: string }[];

  getAst(): TSESTree.Program;
  getTsAst(): SourceFile;
  getScope(): Record<string, unknown>;

  lint(
    code: string,
    parserOptions: ParserOptions,
    rules?: RulesRecord,
  ): LintMessage[];
}

export interface LinterLoader {
  loadLinter(): WebLinter;
}

export type {
  DebugLevel,
  EcmaVersion,
  ParserOptions,
  SourceType,
  TSESTree,
} from '@typescript-eslint/types';
