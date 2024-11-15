import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});
export default [
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
      prettier,
      "@cspell": cspellEslintPlugin,
    },

    languageOptions: {
      parser: tsParser,
    },

    rules: {
      "no-console": 1,
      "prettier/prettier": 2,

      "@cspell/spellchecker": [
        1,
        {
          autoFix: false,
          checkComments: true,
          checkIdentifiers: true,
          checkJSXText: true,
          checkStringTemplates: true,
          checkStrings: true,
          generateSuggestions: true,
          ignoreImportProperties: true,
          ignoreImports: true,
          numSuggestions: 8,

          cspell: {
            words: [
              "merkle",
              "merklize",
              "merklized",
              "merklizer",
              "merkletree",
              "merklization",
              "iden",
              "creds",
              "cred",
              "claims",
              "ciphertext",
              "ldcontext",
              "ZKPexperiance",
              "polygonid",
              "ipfs",
              "privado",
              "zeroknowledge",
              "testdata",
              "thid",
              "groth16",
              "reqs",
              "secp",
              "Eddsa",
              "mtpv2",
              "sigv2",
              "authv",
              "uuidv",
              "sigv",
              "mtpv",
              "esrs",
              "transak",
              "multibase",
              "onchain",
              "credential",
              "keccak",
              "hindex",
              "hvalue",
              "metas",
              "methodid",
              "circom",
              "XSDNS",
              "nonbetween",
              "crosschain",
              "metadatas",
              "wtns",
              "zkevm",
              "linea",
              "nolint",
              "did",
              "dids",
              "circomlibjs",
              "BabyJub",
              "BabyJubJub",
              "Jubjub",
              "unmarshall",
              "unmarshaller",
              "pubsignals",
              "pubsignal",
              "GROTH",
              "circuitId",
              "0xpolygonid",
            ],

            ignoreRegExpList: [
              "Base64",
              "Base64SingleLine",
              "Base64MultiLine",
              "HexValues",
              "HashStrings",
              "Urls",
              "/seedw*/g",
            ],
          },
        },
      ],
    },
  },
];
